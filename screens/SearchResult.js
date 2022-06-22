import React, { useState, useEffect } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking, FlatList, Alert, Button, Image } from "react-native";
import { ColorPicker, ModalInput, Separator, Tag } from "react-native-btr";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { Block, theme } from 'galio-framework';
import argonTheme from '../constants/Theme';
import ListElement from "../components/ListElement";
import * as Progress from 'react-native-progress';
import { facilities, HUXLEY, SHERFIELD, CENTRAL_LIBRARY, EEE, CHEM, IB, BLACKETT, SKEMPTON, CITY, DYSON } from '../constants/facilities';
import { collection, doc, setDoc, getDoc, getFirestore, query, where, getDocs, orderBy } from "firebase/firestore";
import { async } from "@firebase/util";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ALL_TAGS, CAFE_TAGS, STUDY_PLACE_TAGS, TOILET_TAGS, WATER_FOUNTAIN_TAGS, MICROWAVE_TAGS } from "../constants/tags";
import { allRelevantTags, filterDocsUnderTags, readDocsWithTag } from "../backend/tagManager";
const { width } = Dimensions.get('screen');

export default function SearchResult(props) {
  const main_tag = props.route.params.main_tag

  const [region, setRegion] = useState(null);
  const [marker, setMarker] = useState([{
    id: HUXLEY,
    title: "Huxley Building",
    latlng: { latitude: 51.49906736802353, longitude: -0.17900103307703977 },
  }, {
    id: BLACKETT,
    title: "Blackett Laboratory",
    latlng: { latitude: 51.4996723106143, longitude: -0.17933089625534746 },
  }, {
    id: CENTRAL_LIBRARY,
    title: "Central Library",
    latlng: { latitude: 51.49834075416967, longitude: -0.1782269478696598 }
  }, {
    id: CHEM,
    title: "Chemistry Building (Sir Ernst Chain Building)",
    latlng: { latitude: 51.49768989822215, longitude: -0.17812193650712865 }
  }, {
    id: SHERFIELD,
    title: "Sherfield Building",
    latlng: { latitude: 51.49867744304856, longitude: -0.1781532142436012 }
  }, {
    id: SKEMPTON,
    title: 'Skempton Building',
    latlng: { latitude: 51.498198888050005, longitude: -0.1760628815329859 }
  }, {
    id: CITY,
    title: "City & Guilds Building",
    latlng: { latitude: 51.49850121465218, longitude: -0.17477856029385513 }
  }, {
    id: IB,
    title: "Imperial College Business School",
    latlng: { latitude: 51.49937335617922, longitude: -0.1747500660898253 }
  }, {
    id: DYSON,
    title: "Dyson Building of Design Engineering",
    latlng: { latitude: 51.497919, longitude: -0.174563 }
  }, {
    id: EEE,
    title: "Electrical and Electronic Engineering Building",
    latlng: { latitude: 51.49909979949402, longitude: -0.17636334514753066 }
  }])

  const [showMap, setShowMap] = useState(true);

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

    if (pressedLocation !== '') {
      conditions.push(where("building", "==", pressedLocation));
    }
    // conditions.push(orderBy("avgRating", "desc"));

    const q = query(placeRef, ...conditions);

    const querySnapshot = await getDocs(q);
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

  // START OF LOCATION FILTER 
  const [pressedLocation, setPressedLocation] = useState("");

  useEffect(() => {
    getData(filters);
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getData(filters);
    });
    // console.log(data)

    return willFocusSubscription;
  }, [filters, pressedLocation]);

  // Get user location
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      /* @hide */
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      /* @end */
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0026,
        longitudeDelta: 0.0084,
      };
      setRegion(region);
    })();
  }, []);

  let text = 'Loading...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "";
  }

  // END OF MAP LOADING AND LOCATION
  return (
    <Block safe fluid style={styles.container}>
      {!showMap && 
      <TouchableOpacity
        onPress={() => setShowMap(true)}>
        <Image source={require('../assets/imgs/showMap.png')} style={styles.fullImage} />
      </TouchableOpacity>}
      
      {showMap && <Block style={styles.container2}>
        <Text p bold color = 'white' style={{padding: 10}}>Select a building to filter result:</Text>
        <Block style={styles.mapContainer}>
          {<MapView
            style={styles.map}
            initialRegion={region}
            showsUserLocation={true}
          >
            {marker.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                onPress={e => {
                  setPressedLocation(e.nativeEvent.id);
                  // console.log(pressedLocation);
                  // console.log(e.nativeEvent);
                }}
                identifier={marker.id}
              />
            ))}

          </MapView>}
          {!location && <View style={styles.circles}>
            <Progress.CircleSnail
              style={styles.progress}
              color={['#F44336', '#2196F3', '#009688']}
            />
          </View>}

        </Block>
        {(pressedLocation !== "") &&
          <Button
            title='Reset location or Press another pin'
            onPress={() => {
              setPressedLocation("");
            }}
          />
        }
        {showMap && 
        <TouchableOpacity
        onPress={() => setShowMap(false)}>
        <Image source={require('../assets/imgs/hidemap.png')} style={styles.fullImage2} />
        </TouchableOpacity>
        }

      </Block>}
      <Block style={{ marginHorizontal: 16, flexDirection: "row", flexWrap: "wrap" }}>
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
                }}
              />
            </Block>
          );
        })}
      </Block>


      {data.length != 0 && <ListElement
        list={data}
        idList={ids}
        navigation={props.navigation}
        route={props.route}
      />}
      {data.length == 0 &&
        <Text h1 center>No result found.</Text>}
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
    flexDirection: 'column',
    marginTop: 0,
    width: '100%',
    //backgroundColor: "#abdbe3",
    backgroundColor: theme.COLORS.WHITE,
  },
  container2: {
    flex: 3,
    //justifyContent: "center",
    //alignItems: "center",
    width: width - 32,
    marginTop: 10,
    marginHorizontal: 16,
    backgroundColor: '#6a7ddf',
    // borderWidth: 1,
    borderRadius: 5,
    // borderColor: argonTheme.COLORS.BORDER,
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
  mapContainer: {
    height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loading: {
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
  fullImage: {
    width: width - 32,
    height: 50,
    marginBottom: 10,
    marginHorizontal:16,
    resizeMode: 'contain',
  },
  fullImage2: {
    width: '100%',
    height: 50,
  
    resizeMode: 'contain',
  },
});