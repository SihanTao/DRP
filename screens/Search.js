import React from "react";
import { View, StyleSheet, Dimensions, } from "react-native";
import DropDownSearchBar from "../components/DropDownSearchBar";
import { theme } from 'galio-framework';


const { width } = Dimensions.get('screen');

export default function Search({navigation}) {
  return (
    <View style={styles.container}>
        <DropDownSearchBar navigation={navigation}/>
    </View>
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