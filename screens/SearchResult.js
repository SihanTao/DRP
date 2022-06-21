import React, { useState, useEffect } from "react";
import { Text } from 'galio-framework';
import { View, TextInput, StyleSheet, ImageBackground, Dimensions, Linking, FlatList } from "react-native";
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
const { width } = Dimensions.get('screen');

export default function SearchResult(props) {
  // console.log(props.route.params.studySpace);

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
  } else if (props.route.params.microwave) {
    TAGS = MICROWAVE_TAGS;
  }
  else {
    TAGS = ALL_TAGS;
  }

  let [tags, setTags] = useState(TAGS);

  const [ids, setIds] = useState([]);
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

    if (params.microwave) {
      conditions.push(where('microwave', '==', true))
    }

    // conditions.push(orderBy("avgRating", "desc"));

    const q = query(placeRef, ...conditions, orderBy("avgRating", "desc"));

    const querySnapshot = await getDocs(q);
    const idlist = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log("=========================================");
      // console.log(doc.id, " => ", doc.data());
      // console.log("=========================================");
      list.push(doc.data());
      idlist.push(doc.id);
    });
    setData([...list]);
    setIds([...idlist]);
  }

  function updateFilters() {
    // Initial State of Filter
    const newCategory = [];
    const params = props.route.params;
    // console.log(params);

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

  // START OF LOCATION FILTER 

  function updateLocation() {
    const filterWithLocation = [...filters];

  }

  useEffect(() => {
    getData(filters);
    const willFocusSubscription = props.navigation.addListener('focus', () => {
      getData(filters);
    });

    return willFocusSubscription;
  }, [filters]);

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

  return (
    <Block safe fluid style={styles.container}>
      <Block style={{ flexDirection: "row", flexWrap: "nowrap" }}>
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
              onPress={e => console.log(e.nativeEvent)}
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
    flexDirection: 'column',
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
  mapContainer: {
    height: 200,
    flex: 0.5,
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
});