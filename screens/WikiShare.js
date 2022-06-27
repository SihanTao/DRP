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
import { addSingleDataToFireStore, deleteFieldInFireStore, deleteSingleDataFromFireStore, ReadDocFromFireStore } from "../backend/databaseReadWrite";
import sampleData from "../constants/sampleData"
import { addDocAndTags, addDocUnderTag, alertTrue, allRelevantTags, checkDocTag, dataAddTag, dataHasTag, dataRmvTag, deleteDocAndTags, deleteDocUnderTag, docNotExists, filterDocsUnderTag, filterDocsUnderTags, mergeDocAndTags, readDocsWithTag } from "../backend/tagManager";
import { share_coll_name } from "../constants/ShareCons";
import facilities from "../constants/sampleData";
import { doc } from "firebase/firestore";
import { shareLocalFacilities } from "../constants/shareLocalFacilities";
import DEV_STATUS from "../constants/DevStatus";

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

  const defaultOrNot = (data, prop, val) => {
    if (!data[prop] || data[prop] === "") {
      data[prop] = val
    }
  }

  const processData = (data) => {
      const tag_array = data.raw_tags.toLowerCase().split(' ')

      defaultOrNot(data, "title", data.name)
      defaultOrNot(data, "url", "https://upload.wikimedia.org/wikipedia/commons/0/02/Dalby_Court_looking_north-east.jpg")
      defaultOrNot(data, "avgRating", 0)
      defaultOrNot(data, "numRatings", 0)
      defaultOrNot(data, "map", "https://www.virtuoso.com/TouchPoints/Sites/VCom/Images/image-not-available-map.png")
      defaultOrNot(data, "maps", [{ url: data.map }])

      data["tags"] = {}
      for (let tag of tag_array) {
        if (tag !== "") {
          data.tags[tag] = true
        }
      }
  }

  const onSubmit = async (data) => {
    if (await docNotExists({ doc_name: data.name })) {
      processData(data)

      addDocAndTags(data)
      Alert.alert(
        "Submission Successful",
        // JSON.stringify(data)
      )
    } else {
      Alert.alert(
        "Submission Failed",
        "Wiki with the same name exists, please contact the developer for update."
      )
    }
  };

  /* FUNCTION DISCARDED, NOT WORKING */
  const onUpdate = async (data) => {
    if (!await docNotExists({ doc_name: data.name })) {
      processData(data)

      Object.keys(data).forEach((key) => {
        if (data[key] === "" || data[key] === 0) {
          data[key] = undefined
        }
      })
      if (!data.map) {
        data.maps = undefined
      }
      if (!data.raw_tags) {
        data.tags = undefined
      }

      console.log("[v] >", data)
      mergeDocAndTags(data)
    } else {
      Alert.alert(
        "Submission Failed",
        "Wiki with the same name does not exist, so you cannot update it."
      )
    }
  }

  const onDelete = (data) => {
    deleteDocAndTags({ doc_name: data.name })
    Alert.alert(
      "Deletion Successful",
      JSON.stringify(data)
    )
  };

  const onSync = async (data) => {
    for (let wiki of shareLocalFacilities) {
      addDocAndTags(wiki)
    }
    Alert.alert(
      "Submission Successful",
      "All local wikis are added to database."
    )
  }

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
   * @param height
   *   This variable is deprecated and not used.
   */
  const InputBox = ({
    name,
    placeholder=name,
    control=null,
    height=48,
  }) => {
    const {field} = useController({
      control,
      defaultValue: "",
      name,
    })

    const [nHeight, setNHeight] = useState(48)

    return (<>
      <Input
        value={field.value}
        onChangeText={field.onChange}
        control={control}
        onContentSizeChange={e=>{
          setNHeight(e.nativeEvent.contentSize.height + 20)
        }}
        // Styles
        autoCapitalize="none"
        right
        color="black"
        style={[styles.search, {height: nHeight}]}
        placeholder={placeholder}
        placeholderTextColor={'#8898AA'}
        iconContent={null}
        multiline={true}
        autoCorrect={false}
      />
    </>);
  }

  return (
    <DevStatus status="done">
      <Block>
        <ScrollView>
          <View style={{height: 10}} />
          {/* TODO: Make this one compulsory */}
          <Heading title="Name of Thing*" />
          <InputBox name="name" control={control} />
          <Heading title="Photo" />
          <InputBox name="url" placeholder="URL of the picture" control={control} />
          <Heading title="Description" />
          <InputBox name="description" control={control} height={128} />
          <Heading title="Location" />
          <InputBox name="location" control={control} height={64}/>
          <Heading title="Time" />
          <InputBox name="openingHour" placeholder="opening hours" control={control} />
          <Heading title="Map" />
          <InputBox name="map" placeholder="URL of the map" control={control} />
          <Heading title="External Website" />
          <InputBox name="link" placeholder="URL of the website" control={control} />
          <Heading title="Tags (seperate tags by a single space)" />
          <InputBox name="raw_tags" placeholder="example_tags sherfield_building relax" control={control} height={64} />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="submit"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
          <DevStatus pubHide={true}>
            <View style={[styles.buttonContainer, {marginTop: 50}]}>
              <DevStatus>
                <View style={styles.buttonWrapper}>
                  <Button
                    title="delete"
                    onPress={handleSubmit(onDelete)}
                  />
                </View>
              </DevStatus>
              <DevStatus forceHide={true}>
                <View style={styles.buttonWrapper}>
                  <Button
                    title="update"
                    onPress={handleSubmit(onUpdate)}
                  />
                </View>
              </DevStatus>
              <View style={styles.buttonWrapper}>
                <Button
                  title="sync local"
                  onPress={handleSubmit(onSync)}
                />
              </View>
            </View>
          </DevStatus>
          <View style={[{height: 300}]} />
          {/* The Below One is Just For Testing */}
          <DevStatus forceHide={true} status="developing" pubHide={true}>
            <View style={[{height: 100}]} />
            <View style={[{flexDirection: "row"}]}>
              <Button style={[{fles: 1, marginRight: 5}]}
                title="B_A" 
                onPress={() => {
                  const a = {
                    name: "tm"
                  }
                  dataAddTag(a, { tag: "foo" })
                  addDocUnderTag( { doc_name: a.name, tag: "fo" })
                  // Alert.alert(JSON.stringify(a))
                }}
              />
              <Button style={[{flex: 1, marginRight: 5}]}
                title="B_B" 
                onPress={() => {
                  deleteDocAndTags({ doc_name: "Sample123"})
                }}
              />
              <Button style={[{flex: 1, marginRight: 5}]}
                title="B_C"
                onPress={async () => {
                  const r = await checkDocTag({
                      doc_name: "tmpp",
                      tag: "fooo"
                  })
                  alertTrue({x: r})
                  // Alert.alert(r)
                }}
              />
              <Button style={[{flex: 1, marginRight: 5}]}
                title="B_D"
                onPress={() => {
                  const doc = {
                    name: "sample_doc_2",
                    description: "some description",
                    tags: {
                      tag1: true,
                      // tag2: true,
                      tag4: true,
                    },
                  }
                  addDocAndTags(doc)
                }}
              />
              <Button style={[{flex: 1, marginRight: 5}]}
                title="B_E"
                onPress={async () => {
                  const docsRecv = {}
                  await readDocsWithTag(docsRecv, {tag:"fooo"})
                  const docs = docsRecv.data
                  Alert.alert("1", JSON.stringify(docs))
                  await filterDocsUnderTags(docs, {foo:true, fo:true})
                  Alert.alert("2", JSON.stringify(docs))
                }}
              />
              <Button style={[{flex: 1, marginRight: 5}]}
                title="B_F"
                onPress={async () => {
                  const doc_names = {
                    "sample_doc": true,
                    "sample_doc_2": true,
                  }
                  const tags_res = {}
                  await allRelevantTags(doc_names, tags_res)
                  Alert.alert(JSON.stringify(tags_res.tags))
                }}
              />
              <Button style={[{flex: 1, marginRight: 5}]}
                title="B_G"
                onPress={() => {
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
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
})