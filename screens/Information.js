import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, ImageBackground, Image, Modal, TouchableWithoutFeedback } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Block, theme } from 'galio-framework';
import goStudySpaceSlideShow from "../constants/goStudySpaceSlideShow";
import Tabs from "../components/Tabs";
import { tabs, argonTheme } from "../constants";
import { Text, Button } from 'galio-framework';
import IconExtra from "../components/Icon";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoomer from "../components/ImageZoomer";
import { addRating } from "../backend/databaseReadWrite";

const toiletMap = require("../assets/imgs/huxley_floor2.jpeg");


const { width } = Dimensions.get('screen');

export default function Information(props) {
  const [rating, setRating] = useState(0);
  const { navigation } = props;
  const item = props.route.params.passeditem;
  const id = props.route.params.id;
  console.log("Here in Information " + id);

  // console.log(item);
  const displayImages = [
    {
      url: item.photo,
    },
  ]
  const currentTags = []

  // console.log(item);
  // Create customised tags for study & toilet
  if (item.study) {
    generateStudyPlaceTags(item);
  } else if (item.toilet) {
    generateToiletTags(item);
  }

  function generateStudyPlaceTags(item) {
    if (item.STUDY.GROUP) {
      currentTags.push({
        id: 'group', title: '#group'
      });
    }

    if (item.STUDY.QUIET) {
      currentTags.push({
        id: 'quiet', title: '#quiet'
      });
    }

    if (item.STUDY.SILENT) {
      currentTags.push({
        id: 'silent', title: '#silent'
      });
    }
  }

  function generateToiletTags(item) {
    if (item.TOILET.ACCESSIBLE) {
      currentTags.push({
        id: 'accessible', title: '#accessible'
      });
    }

    if (item.TOILET.FEMALE) {
      currentTags.push({
        id: 'male', title: '#male'
      });
    }

    if (item.TOILET.MALE) {
      currentTags.push({
        id: 'female', title: '#female'
      });
    }
  }

  function renderProduct(item, index) {
    const image = item.url
    return (
      <Block flex>
        <ImageBackground
          //source={Images.Snooker}
          source={{ uri: image }}
          style={[
            styles.imageBlock,
            { width: width, height: 150 },
          ]}
          imageStyle={{
            width: width,
            height: 150,
          }}
        >
        </ImageBackground>
      </Block>
    );
  };

  async function ratingCompleted(rating) {
    // console.log("Rating is: " + rating);
    // console.log("In ratingCompleted function " + id);
    const avgRating = await addRating(id, rating);
    setRating(avgRating);
    alert("Thank you for rating the facility!");
  }

  return (
    <Block safe fluid style={styles.container}>
      <Block style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
          {displayImages &&
            displayImages.map((item, index) =>
              renderProduct(item, index)
            )}
        </ScrollView>
        <Tabs
          data={currentTags}
          navigation={navigation}
        />
      </Block>
      <Block flex center style={styles.home}>
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
          <Text bold size={25} style={styles.heading}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text bold size={25} style={styles.heading}>Location</Text>
          <Text style={styles.description}>Imperial College London, South Kensington Campus, London SW7 2AZ</Text>
          <Text bold size={25} style={styles.heading}>Opening Hours</Text>
          <Text style={styles.description}>24/7, close on holidays </Text>
          <Text bold size={25} style={styles.heading}>Map</Text>
          <Block flex style={styles.imageContainer}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ImageZoomer", {
                imagesList: item.maps,
              })}
            >
              <Image source={{uri: item.maps[0].url}} style={styles.fullImage} />
            </ TouchableWithoutFeedback>
          </Block>
          <Text bold size={25} style={styles.heading}>Rate the facility!</Text>
          <Text style={styles.description}>Current Rating: {rating}</Text>
          <Rating
            type='star'
            ratingCount={5}
            imageSize={60}
            onFinishRating={ratingCompleted}
            style={{ padding: 10 }}
          />

        </ ScrollView>
      </ Block>
    </Block>
  );

}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  imageContainer: {
    width: width - 30,
    borderRadius: 3,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginTop: 0,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginTop: 0,
    width: '100%',
    //backgroundColor: "#abdbe3",
    backgroundColor: theme.COLORS.WHITE,
  },
  heading: {
    paddingHorizontal: 15,
    color: theme.COLORS.BLACK,
  },
  title: {
    paddingHorizontal: 15,
    color: theme.COLORS.BLACK,
    marginBottom: 20,
  },
  description: {
    marginHorizontal: 15,
    marginTop: 0,
    marginBottom: 20,

  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    width: '100%',
    //backgroundColor: "#abdbe3",
    backgroundColor: theme.COLORS.WHITE,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  fullImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});