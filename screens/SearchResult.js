import React, { useState } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking } from "react-native";
import { ColorPicker, ModalInput, Separator, Tag } from "react-native-btr";
import DropDownSearchBar from "../components/DropDownSearchBar";
import SearchBarWithTag from "../components/SearchBarWithTag";
import Images from '../constants/Images';
import { Block, theme } from 'galio-framework';
import Home from '../screens/Home'
import argonTheme from '../constants/Theme';
import IconExtra from '../components/Icon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const { width } = Dimensions.get('screen');

export default function SearchResult() {
  let [tags, setTags] = useState([
    { name: "study space", color: "#f43", active: false },
    { name: "silent", color: "#484", active: false },
    { name: "group", color: "#E91", active: false },
    { name: "# toilet", color: "#9C2", active: false },
    { name: "# microwave", color: "#673", active: false },
    { name: "# water_fountain", color: "#4CA", active: false },
  ]);

  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const removeTag = (index) => {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  const toggleTag = (index) => {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  const toggle = () => setVisible((visible) => !visible);

  const onCancel = () => {
    setColor("");
    setText("");
    toggle();
  };

  const onOk = () => {
    tags = [...tags, { name: text, color, active: false }];
    setTags(tags);
    onCancel();
  };

  return (

    <View style={styles.container}>
      <View style={styles.container2}>

        {/* <SearchBarWithTag /> */}
        <View
          style={{ flexDirection: "row", flexWrap: "wrap" }}
          iconContent={<IconExtra size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="ArgonExtra" />}
        >
          {tags
            .filter((tag) => tag.active)
            .map((tag, index) => (
              <View key={tag.name + index} style={{ margin: 2 }}>
                <Tag
                  name={tag.name}
                  style={{
                    backgroundColor: tag.color,
                    color: "#fff",
                    borderRadius: 50,
                  }}
                  iconRight="cancel"
                  onPress={() => {removeTag(index)}}
                />
              </View>
            ))}
        </View>
      </View>
      <View style={styles.container5}>
        <View style={styles.container3}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {tags.map((tag, index) => {
              const backgroundColor = tag.active ? tag.color : "#0000";
              const color = tag.active ? "#fff" : tag.color;
              return (
                <View key={tag.name + index} style={{ margin: 2 }}>
                  <Tag
                    name={tag.name}
                    style={{
                      backgroundColor,
                      color,
                      borderWidth: 1,
                      borderRadius: 50,
                    }}
                    onPress={() => toggleTag(index)}
                  />
                </View>
              );
            })}
          </View>
          {visible && (
            <ModalInput onCancel={onCancel} onOk={onOk}>
              <ColorPicker
                selectedColor={color}
                onSelect={(color) => setColor(color)}
              />
              <Separator />
              <TextInput
                autoFocus={true}
                placeholder="Tag"
                multiline={true}
                value={text}
                onChangeText={(text) => setText(text)}
                underlineColorAndroid="#0000"
                style={styles.textInput}
              />
            </ModalInput>
          )}
        </View>
        <View style={styles.container5}>
          <Home noRecommendation={true}></Home>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    width: '100%',
    //backgroundColor: "#abdbe3",
    backgroundColor: theme.COLORS.WHITE,
  },
  container2: {
    flex: 0.5,
    //justifyContent: "center",
    //alignItems: "center",
    width: width - 32,
    marginTop: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
    //
  },
  container3: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    width: width - 32,
    marginTop: 10,
  },
  container5: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    //backgroundColor: "#abdbe3",
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
});