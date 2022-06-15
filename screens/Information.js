import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, ImageBackground, Image, Modal, TouchableWithoutFeedback} from "react-native";
import DropDownSearchBar from "../components/DropDownSearchBar";
import { Block, theme } from 'galio-framework';
import goStudySpaceSlideShow from "../constants/goStudySpaceSlideShow";
import Tabs from "../components/Tabs";
import { tabs, argonTheme } from "../constants";
import { Text, Button } from 'galio-framework';
import IconExtra from "../components/Icon";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoomer from "../components/ImageZoomer";

const toiletMap = require("../assets/imgs/huxley_floor2.jpeg");


const { width } = Dimensions.get('screen');

export default function Information(props) {
    const {navigation} = props;
    const passeditem = props.route.params.passeditem;
    const displayImages = [
        {
            url: passeditem.photo,
        }, 
    ]
    const currentTags = [
        {id: 'toilet', title: '#toilet'},
        {id: 'accessable', title: '#accessable'},
        {id: 'male', title: '#male'},
        {id: 'huxley', title: '#huxley'},
        {id: '2_floor', title: '#2_floor'}
      ]


      const images = [{
        url: '',
        props: {
            // Or you can set source directory.
            source: toiletMap
        }
    }]

    renderOptions = () => {
        const { navigation } = props;
        const optionLeft="Information";
        const optionRight="Map";
        return (
          <Block row style={styles.options}>
    
            <Button style={[styles.tab]} onPress={() => navigation.navigate('Pro')}>
              <Block row middle style = {{backgroundColor: 'black'}}>
                <Icon name="information" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
                <Text size={16} style={styles.tabTitle}>{optionLeft}</Text>
              </Block>
            </Button>
    
            <Button style={styles.tab} onPress={() => navigation.navigate('Pro')}>
              <Block row middle>
                <Icon size={16} name="map" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
                <Text size={16} style={styles.tabTitle}>{optionRight}</Text>
              </Block>
            </Button>
    
          </Block>
        );
      }

    renderProduct = (item, index) => {
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
                  this.renderProduct(item, index)
                )}
            </ScrollView>
            {/* <Tabs 
            data={currentTags || []}
            initialIndex={tabIndex || defaultTab}
            onChange={id => navigation.setParams({ tabId: id })}
            /> */}
            {/* <Block center>
                {this.renderOptions()}
            </Block> */}
            {/* <Text bold size = {30} style={styles.title}>{passeditem.name}</Text> */}
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
                <Text bold size = {25} style={styles.heading}>Description</Text>
                <Text style={styles.description}>{passeditem.description}</Text>
                <Text bold size = {25} style={styles.heading}>Location</Text>
                <Text style={styles.description}>Imperial College London, South Kensington Campus, London SW7 2AZ</Text>
                <Text bold size = {25} style={styles.heading}>Opening Hours</Text>
                <Text style={styles.description}>24/7, close on holidays </Text>
                <Text bold size = {25} style={styles.heading}>Map</Text>
                <Block flex style={styles.imageContainer}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate("ImageZoomer")}
                    >
                        <Image source={toiletMap} style={styles.fullImage}/>
                    {/* <Image source={{ uri: 'https://www.washroom.co.uk/wp-content/uploads/2018/10/DSCF7940-1.jpg' }} style={styles.fullImage} /> */}
                    </ TouchableWithoutFeedback>
                </Block>
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