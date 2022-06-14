import React, { useState } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking, FlatList } from "react-native";
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
    { name: "study space", color: "#f43", active: true },
    { name: "silent", color: "#484", active: false },
    { name: "group", color: "#E91", active: false },
    { name: "quiet", color: "#9C2", active: false },
    // { name: "# microwave", color: "#673", active: false },
    // { name: "# water_fountain", color: "#4CA", active: false },
  ]);

  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const toggleTag = (index) => {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  function renderActiveTags(tag) {
    if (tag.active) {
      return (
        <Text>{tag.name}</Text>
      )
    }
  }


  return (
    <View style={styles.container}>
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
                  onPress={() => toggleTag(index)} />
              </View>
            );
          })}
        </View>

      </View>
      <FlatList
        data={tags}
        renderItem={({ item }) => renderActiveTags(item)}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
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