import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Dimensions, ScrollView, Image, View, ImageBackground } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import { Tag } from "react-native-btr";
import IconExtra from './Icon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Input from './Input';

import goStudySpaceSlideShow from '../constants/goStudySpaceSlideShow';
import Images from '../constants/Images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Information from '../screens/Information';

const { height, width } = Dimensions.get('window');

class ListElement extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProduct = (item, index) => {
    const { navigation, route, idList } = this.props;
    const image = item.url;
    const params = route.params;
    const currentTags = [];
    Object.keys(item.tags).forEach((tag) => {
      currentTags.push(tag)
    })

    return (
      <Block flex style={{ marginVertical: 10 }}>
        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate("Information", {
                passeditem: item,
                id: idList[index],
                showRating: true,
              })
            }
          }
        >
          <ImageBackground
            source={{ uri: image }}
            style={[
              styles.imageBlock,
              { width: width - theme.SIZES.BASE * 2, height: 150 },
            ]}
            imageStyle={{
              width: width - theme.SIZES.BASE * 2,
              height: 150,
              opacity: 0.6,
            }}
          >
            <Block style={styles.categoryTitle}>
              <Block style = {{position: 'absolute',
                left: 5,
                top: 5,}}>
                <View style={{
                      paddingHorizontal: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                  }}>
                <Icon
                  name="star-box"
                  family="ArgonExtra"
                  size={28}
                  color='#fcba03'
                />

                <Text bold style={{
                    fontSize: 16,
                    color: "white"
                  }}>{item.avgRating.toFixed(2)}</Text>
              </View>
                  </Block>
              <Text style={styles.listTitle} size={25} bold >
                {item.title}
              </Text>

              <Block style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {currentTags.map((tag, index) => {
                  const backgroundColor = "#0000";
                  const color = "#fff";
                  return (
                    <Block key={tag + index} style={{ margin: 2 }}>
                      <Tag
                        name={tag}
                        style={{
                          backgroundColor,
                          color,
                          borderWidth: 1,
                          borderRadius: 50,
                        }}
                      />
                    </Block>
                  );
                })}
              </Block>
            </Block>
          </ImageBackground>
        </TouchableOpacity>
      </Block>
    );
  };

  renderList = () => {
    const categories = this.props.list;
    return (
      <ScrollView
        horizontal={false}
        pagingEnabled={true}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        snapToInterval={10}
        contentContainerStyle={{
          paddingVertical: theme.SIZES.BASE / 2,
        }}
      >
        {categories &&
          categories.map((item, index) =>
            this.renderProduct(item, index)
          )}
      </ScrollView>
    );
  }

  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;
    return (
      <Block flex center style={styles.home}>
        {this.renderList()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  listTitle: {
    textAlign: 'right',
    color: theme.COLORS.WHITE,
    textAlignVertical: 'center',
  }
});


export default ListElement;
