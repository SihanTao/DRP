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
import { addSingleDataToFireStore, deleteFieldInFireStore } from "../backend/databaseReadWrite";
import sampleData from "../constants/sampleData"
import { addDocUnderTag, alertTrue, dataAddTag, dataHasTag, dataRmvTag } from "../backend/tagManager";
import { share_coll_name } from "../constants/ShareCons";

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
    addSingleDataToFireStore(data, {
      coll_name: share_coll_name,
      doc_name: data.name,
    })
  };

  const Heading = ({title="Title"}) => (<>
    <Text style={styles.heading}>
      {title}
    </Text>
  </>)

  /** 
   * An InputBox which will be controlled.
   * @param name
   *   The key of the entry of data that will be stored in database
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
          <DevStatus forceHide={false} status="developing" pubHide={true}>
            <View style={[{height: 100}]} />
            <View style={[{flexDirection: "row"}]}>
              <Button style={[{fles: 1}]}
                title="Button_A" 
                onPress={() => {
                  const a = {
                    name: "tmpp"
                  }
                  dataAddTag(a, { tag: "foo" })
                  dataAddTag(a, { tag: "doo" })
                  dataRmvTag(a, { tag: "foo" })
                  addDocUnderTag(a, { tag: "fooo" })
                  // Alert.alert(JSON.stringify(a))
                }}
              />
              <Button style={[{flex: 1}]}
                title="Button_B" 
                onPress={() => {
                  deleteFieldInFireStore({
                    coll_name: "shared_tags",
                    doc_name: "fooo",
                    field_name: "tmpp",
                  })
                }}
              />
            </View>
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