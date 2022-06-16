import React, { useState, useEffect } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking, FlatList } from "react-native";
import { ColorPicker, ModalInput, Separator, Tag } from "react-native-btr";
import DropDownSearchBar from "../components/DropDownSearchBar";
import SearchBarWithTag from "../components/SearchBarWithTag";
import { Block, theme } from 'galio-framework';
import argonTheme from '../constants/Theme';
import ListElement from "../components/ListElement";
import testListElement from '../constants/testListElement';

import { collection, doc, setDoc, getDoc, getFirestore, query, where, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ALL_TAGS, CAFE_TAGS, STUDY_PLACE_TAGS, TOILET_TAGS, WATER_FOUNTAIN_TAGS } from "../constants/tags";
const { width } = Dimensions.get('screen');

export default function SearchResult(props) {
  // console.log(props.route.params.studySpace);

  // Here we could switch between different tags 
  // according to params
  function toggleTag(index) {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  let TAGS = [];
  if (props.route.params.studySpace) {
    TAGS = STUDY_PLACE_TAGS;
  } else if (props.route.params.toilet) {
    TAGS = TOILET_TAGS;
  } else if (props.route.params.cafe) {
    TAGS = CAFE_TAGS;
  } else if (props.route.params.waterfountain) {
    TAGS = WATER_FOUNTAIN_TAGS
  }
  else {
    TAGS = ALL_TAGS;
  }

  let [tags, setTags] = useState(TAGS);

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  async function getData(filters) {
    const list = [];
    const placeRef = collection(getFirestore(), "facilities");
    const conditions = [];
    const params = props.route.params;

    if (params.studySpace) {
      conditions.push(where('study', '==', true));
      if (filters.includes('Silent Study')) {
        conditions.push(where('STUDY.SILENT', '==', true));
      }

      if (filters.includes('Group Study')) {
        conditions.push(where('STUDY.GROUP', '==', true));
      }

      if (filters.includes('Quiet Study')) {
        conditions.push(where('STUDY.QUIET', '==', true));
      }
    }

    if (params.toilet) {
      conditions.push(where('toilet', '==', true));
      if (filters.includes('accessible')) {
        conditions.push(where('TOILET.ACCESSIBLE', '==', true));
      }

      if (filters.includes('male')) {
        conditions.push(where('TOILET.MALE', '==', true));
      }

      if (filters.includes('female')) {
        conditions.push(where('TOILET.FEMALE', '==', true));
      }
    }

    if (params.cafe) {
      conditions.push(where('cafe', '==', true));
      if (filters.includes('breakfast')) {
        conditions.push(where("CAFE.BREAKFAST", '==', true))
      }
      if (filters.includes('lunch')) {
        conditions.push(where("CAFE.LUNCH", '==', true))
      }
      if (filters.includes('afternoon')) {
        conditions.push(where("CAFE.AFTERNOON", '==', true))
      }
      if (filters.includes('supper')) {
        conditions.push(where("CAFE.SUPPER", '==', true))
      }
    }

    if (params.waterfountain) {
      conditions.push(where('waterfountain', '==', true))
      if (filters.includes('Huxley')) {
        conditions.push(where('STUDY.Huxley', '==', true))
      }
      if (filters.includes('Sherfield')) {
        conditions.push(where('STUDY.Sherfield', '==', true))
      }
    }

    const q = query(placeRef, ...conditions);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log("=========================================");
      // console.log(doc.id, " => ", doc.data());
      // console.log("=========================================");
      if (list.includes(doc.data()) === false) {
        list.push(doc.data());
      }
    });
    setData([...list]);
  }

  function updateFilters() {
    // Initial State of Filter
    const newCategory = [];
    const params = props.route.params;
    console.log(params);

    if (params.studySpace) {
      if (TAGS[1].active) {
        newCategory.push('Silent Study');
      }

      if (TAGS[2].active) {
        newCategory.push('Group Study');
      }

      if (TAGS[3].active) {
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
        newCategory.push('afternoon tea');
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
  }, [filters])

  return (
    <Block safe fluid style={styles.container}>
      <Block style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {tags.map((tag, index) => {
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
        navigation={props.navigation}
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