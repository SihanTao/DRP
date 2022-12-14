import React from 'react';
import { Text } from 'galio-framework';
import { argonTheme, tabs } from "../constants/";
import { StyleSheet, Dimensions, ScrollView, ImageBackground, Linking, Image } from 'react-native';
import { Block, theme } from 'galio-framework';
import goStudySpaceSlideShow from '../constants/goStudySpaceSlideShow';
import AutomatedSlideshow from '../components/AutomatedSlideShow';
import Images from '../constants/Images';
import { Card } from '../components';
import articles from '../constants/articles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { width } = Dimensions.get('screen');
import ListElement from '../components/ListElement';
import Tabs from '../components/Tabs';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRecommendationText = () => {
    return (
      <Text
        h3
        style={{ marginBottom: theme.SIZES.BASE / 2 }}
        color={argonTheme.COLORS.DEFAULT}
      >
        Recommendation
      </Text>
    )
  }

  showUrl = (position) => {
    const { navigation } = this.props;
      navigation.navigate("Information", {
        passeditem: goStudySpaceSlideShow[position],
        url: goStudySpaceSlideShow[position].url,
        title: goStudySpaceSlideShow[position].title,
        showRating: false,
        id: 1,
      })
  }
  renderArticles = (noRecommendation) => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        {noRecommendation ? null : this.renderRecommendationText()}
        {/* <Text bold size={16} style={styles.title}>
        Explore new events:
        </Text> */}
        <Block flex card style={styles.category}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("webpage",
            {
              url: 'https://www.imperialcollegeunion.org/whats-on/listings/upcoming',
              title: "Upcoming Events"
            })
          }
        >
          <Image
            source={Images.upcomingEventsLogo}
            style={[
              styles.eventImageBlock,
              { width: width - theme.SIZES.BASE * 2, height: 160 },
            ]}
            imageStyle={{
              width: width - theme.SIZES.BASE * 2,
              height: 252,
            }}
          >
          </Image>

        </TouchableWithoutFeedback>
        </ Block>
        {/* <Text bold size={16} style={styles.title}>
        Explore facilities:
        </Text> */}
        <Block flex style={styles.category2}>
          <AutomatedSlideshow
            showUrl = {this.showUrl}
            style={styles.goStudyTitle}
            dataSource={goStudySpaceSlideShow}
          ></AutomatedSlideshow>
        </Block>
        {/* <Block flex card style={styles.category}>
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
              
              style={styles.imageBlock}
              imageStyle={{
                width: width - theme.SIZES.BASE * 2,
                height: 160,
                //marginVertical: 20, 
              }}
            >
              <Block style={styles.categoryTitle}>
                <Text size={20} bold color={theme.COLORS.WHITE}>
                  Imperial Union Snooker
                </Text>
              </Block>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </Block> */}

      </ScrollView>
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>
        {/* {this.renderRecommendations()} */}
        {this.renderArticles(this.props.noRecommendation)}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  goStudyTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  },
  pad: {
    height: 50,
    backgroundColor: "transparent",
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  category2: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    color: argonTheme.COLORS.HEADER,
  },
  eventImageBlock: {
    width: width - theme.SIZES.BASE * 2, 
    height: 160, 
  },
  imageBlock: {
    width: width - theme.SIZES.BASE * 2, 
    height: 160, 
  }
});

export default Home;
