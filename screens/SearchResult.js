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
import { allRelevantTags, readDocsWithTag } from "../backend/tagManager";
const { width } = Dimensions.get('screen');

export default function SearchResult(props) {
  // Here we could switch between different tags 
  // according to params
  function toggleTag(index) {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  // let TAGS = tagsRelatedToTag({tag: props.route.params.main_tag});
  const [TAGS, setTAGS] = useState([
    {name: "sample", color: "#484", active: false }
  ])
  useEffect(() => {
    tagsRelatedToTag({ tag: props.route.params.main_tag })
    getData(filters)
  }, [])

  async function tagsRelatedToTag({tag}) {
    const docs_res = {};
    await readDocsWithTag(docs_res, {tag})
    const doc_names = {};
    Object.keys(docs_res.data).forEach((doc) => {
      doc_names[doc] = true;
    })
    const tags_res = {};
    await allRelevantTags(doc_names, tags_res);
    const ret = {};
    Object.keys(tags_res.tags).forEach((tag) => {
      ret[tag] = { name: tag, color: "#000000", active: false }
    })
    setTAGS(ret)
    setTags(ret)
  }

  let [tags, setTags] = useState({})

  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  async function getData(filters) {
    console.log("> getData")
    const list = [];
    const placeRef = collection(getFirestore(), "facilities");
    const conditions = [];
    const params = props.route.params;

    const tag = params.main_tag
    const doc_recv = {}
    await readDocsWithTag(doc_recv, {tag})

    const idlist = []
    console.log("> doc_recv.data: ", doc_recv.data)
    Object.keys(doc_recv.data).forEach((doc) => {
      list.push(doc);
      idlist.push(doc.name);
    })
    console.log("list: ", list)
    setData([...list]);
    setIds([...idlist]);
  }

  function updateFilters() {
    // Initial State of Filter
    const newCategory = [];
    const params = props.route.params;

    if (params.studySpace) {
      if (TAGS[0].active) {
        newCategory.push('Silent Study');
      }

      if (TAGS[1].active) {
        newCategory.push('Group Study');
      }

      if (TAGS[2].active) {
        newCategory.push('Quiet Study');
      }
    } else if (params.toilet) {
      if (TAGS[0].active) {
        newCategory.push('accessible');
      }

      if (TAGS[1].active) {
        newCategory.push('male');
      }

      if (TAGS[2].active) {
        newCategory.push('female');
      }
    } else if (params.cafe) {
      if (TAGS[0].active) {
        newCategory.push('breakfast');
      }

      if (TAGS[1].active) {
        newCategory.push('lunch');
      }

      if (TAGS[2].active) {
        newCategory.push('afternoon');
      }

      if (TAGS[3].active) {
        newCategory.push('supper');
      }
    } else if (params.waterfountain) {
      if (TAGS[0].active) {
        newCategory.push('Huxley');
      }

      if (TAGS[1].active) {
        newCategory.push('Sherfield')
      }
    }

    setFilters([...newCategory]);
  }

  useEffect(() => {
    getData(filters);
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getData(filters);
    });

    return willFocusSubscription;
  // }, [filters]);
  }, []);
  console.log("> tags: ", tags)
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