import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import { Tag } from "react-native-btr";

import IconExtra from './Icon';
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
    const { navigation, route } = this.props;
    const image = item.photo;
    const params = route.params;
    const currentTags = [];
    if (params.studySpace) {
      if (item.STUDY.GROUP === true) {
        currentTags.push('group');
      } 
      if (item.STUDY.SILENT === true) {
        currentTags.push('silent');
      } 
      if (item.STUDY.QUIET === true) {
        currentTags.push('quiet');
      } 
    }
    if (params.toilet) {
      if (item.TOILET.ACCESSIBLE === true) {
        currentTags.push('accessible');
      } 
      if (item.TOILET.MALE === true) {
        currentTags.push('male');
      } 
      if (item.TOILET.FEMALE === true) {
        currentTags.push('female');
      } 
    }
    return (
      <Block flex style={{ marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Information", {
            passeditem: item,
          })
          }
        >
          <ImageBackground
            //source={Images.Snooker}
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
              <Text style={styles.listTitle} size={25} bold >
                {item.name}
              </Text>
              {/* <Text style={styles.listTitle} size={25} bold >
                {currentTags[0]}
              </Text> */}
              
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
