import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';

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
    const { navigation } = this.props;
    const image = item.photo;
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
