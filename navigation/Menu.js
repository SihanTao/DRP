import { Block, Text, theme } from "galio-framework";
import { Image, ScrollView, StyleSheet } from "react-native";

import { DrawerItem as DrawerCustomItem } from "../components";
import Images from "../constants/Images";
import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const screens = ["Home", "Search", "Share"];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.06} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('ICOfficialSite', {
            url: "https://www.imperial.ac.uk/",
            title: "Imperial College London"
          })}
        >
          <Image
            styles={styles.logo}
            source={Images.Logo}
          />
        </TouchableWithoutFeedback>
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
});

export default CustomDrawerContent;
