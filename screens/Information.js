import React, { useEffect, useState } from "react";
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
import { addRating, getCurrentRating } from "../backend/databaseReadWrite";

const toiletMap = require("../assets/imgs/huxley_floor2.jpeg");


const { width } = Dimensions.get('screen');

export default function Information(props) {
  const [rating, setRating] = useState(0);
  const { navigation } = props;
  const item = props.route.params.passeditem;
  const id = props.route.params.id;
  const showRating = props.route.params.showRating;
  // console.log("Here in Information " + id);

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await getCurrentRating(props.route.params.id);
      // console.log("> id: ", props.route.params.id)
      setRating(fetched);
    }
    showRating ? fetchData(id).catch(console.error) : null;
  }, [])

  // console.log(item);
  const displayImages = [
    {
      url: item.url,
    },
  ]
  const currentTags = []

  // console.log(item);
  // Create customised tags for study & toilet
  console.log("> item:", item)
  Object.keys(item.tags).forEach((tag) => {
    currentTags.push({
      id: tag, title: "#"+tag
    })
  })

  // const imagesList = [{
  //   url: 'https://aboutreact.com/wp-content/uploads/2018/08/react_nativeset_opacity_of_image.png',

  // }, 
// ]

  const renderRating = () => {
    return (
      <><Text bold size={25} style={styles.heading}>Rate the facility!</Text>
          <Text style={styles.description}>Current Rating: {rating.toFixed(2)}</Text><Rating
            type='star'
            ratingCount={5}
            imageSize={60}
            onFinishRating={ratingCompleted}
            style={{ padding: 10 }}
          /> 
        </>
    )
  }

  const renderUrl = () => {
    return (
      <>
      <Text bold size={25} style={styles.heading}>Externel Website</Text>
      <TouchableWithoutFeedback
              onPress={() => navigation.navigate("webpage",
                  {
                    url: item.link,
                    title: item.title,
                  })
                }
              >
              <Text style={styles.url}>{item.link}</Text>
            </ TouchableWithoutFeedback>
      </>
    )
  }

  function renderOptions() {
    const { navigation } = props;
    const optionLeft = "Information";
    const optionRight = "Map";
    return (
      <Block row style={styles.options}>

        <Button style={[styles.tab]} onPress={() => {}}>
          <Block row middle style={{ backgroundColor: 'black' }}>
            <Icon name="information" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionLeft}</Text>
          </Block>
        </Button>

        <Button style={styles.tab} onPress={() => {}}>
          <Block row middle>
            <Icon size={16} name="map" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionRight}</Text>
          </Block>
        </Button>

      </Block>
    );
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
          isInfo={true}
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
          <Text style={styles.description}>{(item.location === '' || item.location === undefined) ? "Imperial College London, South Kensington Campus, London SW7 2AZ" : item.location}</Text>
          <Text bold size={25} style={styles.heading}>Time</Text>
          <Text style={styles.description}>{(item.openingHour === '' || item.openingHour === undefined) ? "24/7 close on holidays" : item.openingHour}</Text>
          <Text bold size={25} style={styles.heading}>Map {"(click to zoom)"}</Text>
          <Block flex style={styles.imageContainer}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ImageZoomer", {
                imagesList: item.maps,
              })}
            >
              <Image source={{ uri: item.maps[0].url }} style={styles.fullImage} />
            </ TouchableWithoutFeedback>
          </Block>
          {showRating ? renderRating() : null}
          {(item.link === '' || item.link === undefined) ? null : renderUrl()}
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
  url: {
    marginHorizontal: 15,
    marginTop: 0,
    marginBottom: 20,
    color: 'blue',
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