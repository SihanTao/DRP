import React from "react";
import DevStatus from "../constants/DevelopeStatus";
import { Text } from "react-native-elements";
import { Block, theme } from "galio-framework";
import { Button } from "react-native-elements";
import { StyleSheet, Dimensions, Keyboard, Alert } from "react-native";
import { Input } from "../components";
import argonTheme from "../constants/Theme";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useRef } from "react";
import { useForm, useController } from 'react-hook-form';
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { addSingleDataToFireStore } from "../backend/databaseReadWrite";
import sampleData from "../constants/sampleData"

const { height, width } = Dimensions.get('window');

/** A share page which allows users to upload wiki pages to database */
export default function WikiShare(props) {
  return (<HookFormImplementation {...props} />)
}

/**
 * Uses react-hook-form to implement the Share Page
 * Link: https://react-hook-form.com/
 */
function HookFormImplementation(props) {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addSingleDataToFireStore(data, {coll_name: "tmp", doc_name: data.name})
  };

  const Heading = ({title="Title"}) => (<>
    <Text style={styles.heading}>
      {title}
    </Text>
  </>)

  /** 
   * An InputBox which will be controlled.
   * @param name
   *   The name of the entry of data that will be stored in database
   * @param control
   *   Should be the control from `react-hook-form` library
   */
  const InputBox = ({
    name,
    placeholder=name,
    control=null,
  }) => {
    const {field} = useController({
      control,
      defaultValue: "",
      name,
    })

    return (<>
      <Input
        value={field.value}
        onChangeText={field.onChange}
        control={control}
        // Styles
        right
        color="black"
        style={styles.search}
        placeholder={placeholder}
        placeholderTextColor={'#8898AA'}
        iconContent={null}
      />
    </>);
  }

  return (
    <DevStatus status="developing">
      <Block>
        <ScrollView>
          {/* TODO: Make this one compulsory */}
          <Heading title="Name of Wiki*" />
          <InputBox name="name" control={control} />
          <Heading title="Thumbnail" />
          <InputBox name="photo" placeholder="URL of the picture" control={control} />
          <Heading title="Description" />
          <InputBox name="description" control={control} />
          <Heading title="Location" />
          <InputBox name="location" control={control}/>
          <Heading title="Opening Hours" />
          <InputBox name="openingHours" placeholder="opening hours" control={control} />
          <Heading title="Map" />
          <InputBox name="map" placeholder="URL of the map" control={control} />
          <Heading title="External Website" />
          <InputBox name="url" placeholder="URL of the website" control={control} />
          <Button
            title="submit"
            onPress={handleSubmit(onSubmit)}
          />
          <DevStatus forceHide={true} status="developing" pubHide={true}>
            <View style={[{height: 1000}]} />
            <Button
              title="SyncDataBase" 
              onPress={() => {
                addDataToFireStoreCustom(sampleData, {dbName: "tmp"})
                alert('Data added!')
              }}
            />
          </DevStatus>
        </ScrollView>
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