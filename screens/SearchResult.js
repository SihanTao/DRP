import React, { useState, useEffect } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking, FlatList, Alert } from "react-native";
import { ColorPicker, ModalInput, Separator, Tag } from "react-native-btr";
import DropDownSearchBar from "../components/DropDownSearchBar";
import SearchBarWithTag from "../components/SearchBarWithTag";
import { Block, theme } from 'galio-framework';
import argonTheme from '../constants/Theme';
import ListElement from "../components/ListElement";
import testListElement from '../constants/testListElement';

import { collection, doc, setDoc, getDoc, getFirestore, query, where, getDocs, orderBy } from "firebase/firestore";
import { async } from "@firebase/util";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ALL_TAGS, CAFE_TAGS, STUDY_PLACE_TAGS, TOILET_TAGS, WATER_FOUNTAIN_TAGS, MICROWAVE_TAGS } from "../constants/tags";
import { allRelevantTags, filterDocsUnderTags, readDocsWithTag } from "../backend/tagManager";
const { width } = Dimensions.get('screen');

export default function SearchResult(props) {
  const main_tag = props.route.params.main_tag

  // Here we could switch between different tags 
  // according to params
  function toggleTag(index) {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags(tags);
  };

  // let TAGS = tagsRelatedToTag({tag: props.route.params.main_tag});
  // const [TAGS, setTAGS] = useState([
  //   {name: "sample", color: "#484", active: false }
  // ])
  useEffect(() => {
    tagsRelatedToTag({ tag: main_tag })
    getData(filters)
  }, [filters])

  async function tagsRelatedToTag({tag}) {
    const docs_res = {};
    await readDocsWithTag(docs_res, {tag})
    const doc_names = {};
    Object.keys(docs_res.data).forEach((doc) => {
      doc_names[doc] = true;
    })
    const tags_res = {};
    await allRelevantTags(doc_names, tags_res);
    tags_res.tags[main_tag] = false
    const ret = {};
    Object.keys(tags_res.tags).forEach((tag) => {
      if (tags_res.tags[tag]) {
        ret[tag] = { name: tag, color: "#6a7ddf", active: false }
      }
    })
    // setTAGS(ret)
    setTags(ret)
  }

  let [tags, setTags] = useState({})

  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({})

  async function getData(filters) {
    const list = [];
    const placeRef = collection(getFirestore(), "facilities");
    const conditions = [];
    const params = props.route.params;

    const tag = params.main_tag
    const doc_recv = {}
    await readDocsWithTag(doc_recv, {tag})

    const idlist = []
    const docs = doc_recv.data
    await filterDocsUnderTags(docs, filters)
    Object.keys(docs).forEach((doc_name) => {
      const doc = docs[doc_name]
      if (doc) {
        list.push(doc);
        idlist.push(doc.name);
      }
    })
    setData([...list]);
    setIds([...idlist]);
  }

  function updateFilters() {
    // Initial State of Filter
    const newCategory = {};
    const params = props.route.params;

    Object.keys(tags).forEach((tag) => {
      const active = tags[tag].active
      if (active) {
        newCategory[tag] = true
      }
    })

    setFilters(newCategory);
  }

  useEffect(() => {
    getData(filters);
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getData(filters);
    });

    return willFocusSubscription;
  }, [filters]);
  // }, []);

  return (
    <Block safe fluid style={styles.container}>
      <Block style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {Object.keys(tags).map((index) => {
          const tag = tags[index]
          const backgroundColor = tag.active ? tag.color : "#0000";
          const color = tag.active ? "#fff" : tag.color;
          return (
            <Block key={tag.name + index} style={{ margin: 2 }}>
              <Tag
                name={tag.name}
                style={{
                  backgroundColor,
                  color,
                  borderWidth: 1,
                  borderRadius: 50,
                }}
                onPress={() => {
                  toggleTag(index);
                  updateFilters();
                }} />
            </Block>
          );
        })}
      </Block>
      <ListElement
        list={data}
        idList={ids}
        navigation={props.navigation}
        route={props.route}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  container: {
    flex: 1,
    marginTop: 0,
    width: '100%',
    //backgroundColor: "#abdbe3",
    backgroundColor: theme.COLORS.WHITE,
  },
  container2: {
    flex: 0.5,
    //justifyContent: "center",
    //alignItems: "center",
    width: width - 32,
    marginTop: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
    //
  },
  container3: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    width: width - 32,
    marginTop: 10,
  },
  container5: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    //backgroundColor: "#abdbe3",
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
});