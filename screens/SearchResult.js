import React, { useState, useEffect } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking, FlatList } from "react-native";
import { ColorPicker, ModalInput, Separator, Tag } from "react-native-btr";
import DropDownSearchBar from "../components/DropDownSearchBar";
import SearchBarWithTag from "../components/SearchBarWithTag";
import { Block, theme } from 'galio-framework';
import argonTheme from '../constants/Theme';

import { collection, doc, setDoc, getDoc, getFirestore, query, where, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

const { width } = Dimensions.get('screen');

export default function SearchResult() {
  let [tags, setTags] = useState([
    { name: "study space", color: "#f43", active: true },
    { name: "silent", color: "#484", active: false },
    { name: "group", color: "#E91", active: false },
    { name: "quiet", color: "#9C2", active: false },
  ]);

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  const toggleTag = (index) => {
    const tag = tags[index];
    tag.active = !tag.active;
    setTags([...tags]);
  };

  async function getData(filters) {
    const list = [];
    const studySpaceRef = collection(getFirestore(), "study_space");
    const conditions = [];

    if (filters.includes('Silent Study')) {
      conditions.push(where('category.SILENTSTUDY', '==', true));
    }

    if (filters.includes('Group Study')) {
      conditions.push(where('category.GROUPSTUDY', '==', true));
    }

    if (filters.includes('Quiet Study')) {
      conditions.push(where('category.QUIETSTUDY', '==', true));
    }

    const q = query(studySpaceRef, ...conditions);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log("=========================================");
      // console.log(doc.id, " => ", doc.data());
      // console.log("=========================================");
      if (list.includes(doc.data())===false) {
        list.push(doc.data());
      }
    });
    setData([...list]);
    console.log(data);
  }

  function renderActiveTags(tag) {
    if (tag.active) {
      return (
        <Text style={styles.item}>{tag.name}</Text>
      )
    }
  }

  function renderObject(item) {
    return (
      <Text style={styles.item}>{item.name}</Text>
    );
  }

  function updateFilters() {
    // Initial State of Filter
    let name = filters.name;
    let category = filters.category;
    let sort = filters.sort;
    const newCategory = [];

    if (tags[1].active) {
      newCategory.push('Silent Study');
    }

    if (tags[2].active) {
      newCategory.push('Group Study');
    }

    if (tags[3].active) {
      newCategory.push('Quiet Study');
    }

    console.log("******************");
    console.log(tags);
    console.log(newCategory);
    console.log("******************");

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
      <FlatList
        data={tags}
        renderItem={({ item }) => renderActiveTags(item)}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => renderObject(item)}
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