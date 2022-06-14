import React from "react";
import { View, StyleSheet, Dimensions, } from "react-native";
import DropDownSearchBar from "../components/DropDownSearchBar";
import { Block, theme } from 'galio-framework';
import goStudySpaceSlideShow from "../constants/goStudySpaceSlideShow";
import Tabs from "../components/Tabs";
import { tabs } from "../constants";


const { width } = Dimensions.get('screen');

export default function Information() {
    categories = goStudySpaceSlideShow

    renderProduct = (item, index) => {
        const image = item.url
        return (
          <Block flex>
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
              }}
            >
              <Block style={styles.categoryTitle}>
                <Text style={styles.listTitle} size={25} bold >
                  {item.title}
                </Text>
              </Block>
            </ImageBackground>
          </Block>
        );
      };

  return (
    <Block> 
          <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: theme.SIZES.BASE / 2,
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
            <Tabs 
            data={tabs.categories || []}
            // initialIndex={tabIndex || defaultTab}
            // onChange={id => navigation.setParams({ tabId: id })}
            navigation={navigation}/>
            <Text> Location</Text>
            <Text> Imperial College London, South Kensington Campus, London SW7 2AZ</Text>
            <Text> Opening Hours</Text>
            <Text> 24/7, close on holidays </Text>
            <Text> Introduction</Text>
            <Text> </Text>
    </Block>
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
  }
});