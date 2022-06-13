import React from 'react';
import { Text } from 'galio-framework';
import { argonTheme, tabs } from "../constants/";
import { StyleSheet, Dimensions, ScrollView, ImageBackground, Linking } from 'react-native';
import { Block, theme } from 'galio-framework';
import goStudySpaceSlideShow from '../constants/goStudySpaceSlideShow';
import AutomatedSlideshow from '../components/AutomatedSlideShow';
import Images from '../constants/Images';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');



class Home extends React.Component {

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

  renderArticles = (noRecommendation) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          {noRecommendation ? null : this.renderRecommendationText()}
        </Block>

        <Block flex card style={styles.category}>
          <AutomatedSlideshow
            onPress={() => Linking.openURL('https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/gostudy/')
              .catch((err) => console.error('An error occurred', err))}
            style={styles.goStudyTitle}
            dataSource={goStudySpaceSlideShow}
          ></AutomatedSlideshow>

          <ImageBackground
            source={{ uri: Images.Snooker }}
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
              <Text size={18} bold color={theme.COLORS.WHITE}
                onPress={() => Linking.openURL('https://www.union.ic.ac.uk/rcc/snooker_billiards/home/about.php')
                  .catch((err) => console.error('An error occurred', err))}>
                Imperial Union Snooker
              </Text>
            </Block>
          </ImageBackground>
        </Block>

      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
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
  category: {
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
});

export default Home;
