import React from "react";
import DevStatus from "../constants/DevelopeStatus";
import { Text } from "react-native-elements";
import { Block, theme } from "galio-framework";
import { Button } from "react-native-elements";
import { StyleSheet, Dimensions, Keyboard, Alert } from "react-native";
import { Input } from "../components";
import argonTheme from "../constants/Theme";

const { height, width } = Dimensions.get('window');

export default function WikiShare() {
  const Heading = ({title="Title"}) => (<>
    <Text style={styles.heading}>
      {title}
    </Text>
  </>)

  const InputBox = ({placeholder="input here..."}) => (<>
    <Input
      right
      color="black"
      style={styles.search}
      placeholder={placeholder}
      placeholderTextColor={'#8898AA'}
      iconContent={null}
    >
    </Input>
  </>)

  return (
    <DevStatus status="developing">
      <Block>
        <Heading title="Thumbnail" />
        <InputBox placeholder="URL of the picture" />
        <Heading title="Description" />
        <InputBox placeholder="description" />
        <Heading title="Location" />
        <InputBox placeholder="location" />
        <Heading title="Opening Hours" />
        <InputBox placeholder="opening Hours" />
        <Heading title="Map" />
        <InputBox placeholder="URL of the map" />
        <Heading title="External Website" />
        <InputBox placeholder="URL of the website" />
        <Button
          title="submit"
          onPress={() => {
            Alert.alert(
              "Submitted Successfully", 
              "Submitted Wiki will be visible after being censored.")
          }}
        />
      </Block>
    </DevStatus>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 15,
    color: theme.COLORS.BLACK,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
})