import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';

import IconExtra from './Icon';
import Input from './Input';

import goStudySpaceSlideShow from '../constants/goStudySpaceSlideShow';
import Images from '../constants/Images';

const { height, width } = Dimensions.get('window');

class ListElement extends React.Component {
     

    renderProduct = (item, index) => {
        const { navigation } = this.props;
    
        return (
            <TouchableWithoutFeedback
            onPress={() => navigation.navigate("webpage",
              {
                url: 'https://www.union.ic.ac.uk/rcc/snooker_billiards/home/about.php',
                title: "Imperial Union Snooker"
              })
            }
          >
            <ImageBackground
              source={Images.Snooker}
              style={[
                styles.imageBlock,
                { width: width - theme.SIZES.BASE * 2, height: 252 },
              ]}
              imageStyle={{
                width: width - theme.SIZES.BASE * 2,
                height: 252,
              }}
            >
              <Block style={styles.categoryTitle}>
                <Text size={18} bold color={theme.COLORS.WHITE}>
                  Imperial Union Snooker
                </Text>
              </Block>
            </ImageBackground>
          </TouchableWithoutFeedback>
        );
      };

  renderList = () => {
        const categories = goStudySpaceSlideShow;
      return (
        <ScrollView
              horizontal={false}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              //snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
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
});

export default ListElement;
