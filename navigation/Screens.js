import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs, articles } from "../constants";
import DevStatus from "../constants/DevelopeStatus";
import facilities from "../constants/facilities";

import WikiShare from "../screens/WikiShare"
import Articles from "../screens/Articles";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
import Elements from "../screens/Elements";
// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../constants/firebaseConfig";
import TagDemo from "../screens/Tag";
import SearchResult from "../screens/SearchResult"
import Search from "../screens/Search";
import BottomTabNavigator from "./TabNavigator";
import Information from "../screens/Information";

const { width } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();

import { signInAnonymous } from "../backend/auth"
import { addDataToFireStore, testAddFireStore } from "../backend/databaseReadWrite";
import WebPage from "../screens/WebPage";
import ImageZoomer from "../components/ImageZoomer";
import { Text } from "react-native-elements";

export default function OnboardingStack(props) {
  initializeApp(firebaseConfig);
  signInAnonymous();
  // addDataToFireStore(studySpaces);
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const ElementsStack = createNativeStackNavigator();

function ElementsStackScreen(props) {
  return (
      <ElementsStack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: "screen",
        }}>
        <ElementsStack.Screen
          name="Elements"
          component={Elements}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Elements" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
      </ElementsStack.Navigator>
  );
}


const RegisterStack = createNativeStackNavigator();

function RegisterStackScreen(props) {
  return (
    <RegisterStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <RegisterStack.Screen
        name="Account"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Account" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </RegisterStack.Navigator>
  );
}

const ArticlesStack = createNativeStackNavigator();

export function ArticlesStackScreen(props) {
  return (
    <DevStatus status="developing">
      <ArticlesStack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: true,
        }}
      >
        <ArticlesStack.Screen
          name="Articles"
          component={Articles}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Articles" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
      </ArticlesStack.Navigator>
    </DevStatus>
  );
}


const ProfileStack = createNativeStackNavigator();

export function ProfileStackScreen(props) {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              title="Profile"
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
            />
          ),
          headerTransparent: true,
        }}
      />

      <ProfileStack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "float",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              tabs={tabs.categories}
              search
              // multiselect
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

      <HomeStack.Screen
        name="Search"
        component={SearchStackScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="SearchResult"
        component={SearchResultStackScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="webpage"
        component={WebPageScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Information"
        component={InformationStackScreen}
        options={{ headerShown: false }}
      /> 

      <HomeStack.Screen
        name="ImageZoomer"
        component={ImageZoomerStackScreen}
        options={{ headerShown: false }}
      /> 

    </HomeStack.Navigator>
  );
}

const TagStack = createNativeStackNavigator();

function TagStackScreen(props) {
  return (
    <TagStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <TagStack.Screen
        name="Tags"
        component={TagDemo}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Tags" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

    </TagStack.Navigator>
  );
}

const WebPageStack = createNativeStackNavigator();

function WebPageScreen({ navigation, route }) {
  return (
    <>
      <Header back title={route.params.title} navigation={navigation} />
      <WebPage url={route.params.url} />
    </>
  );
}

const SearchResultStack = createNativeStackNavigator();

function SearchResultStackScreen({ route, navigation }) {
  const { studySpace } = route.params;
  return (
    <>
      <Header back title="SearchResult" navigation={navigation} />
      <SearchResult navigation={navigation} route={route}/>
    </>
  );
}

const SearchStack = createNativeStackNavigator();

export function SearchStackScreen(props) {
  return (
    <SearchStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <SearchStack.Screen
        name="webpage"
        component={WebPageScreen}
        options={{ headerShown: false }}
      />

    </SearchStack.Navigator>
  );
}

const InformationStack = createNativeStackNavigator();

function InformationStackScreen({ route, navigation }) {
  return (
    <>
    <Header back title={route.params.passeditem.name}  navigation={navigation} />
    <Information navigation={navigation} route={route}/>
  </>
  );
}

function ImageZoomerStackScreen({ route, navigation }) {
  return (
    <>
    <Header back title="back" navigation={navigation} />
    <ImageZoomer navigation={navigation} route={route}/>
  </>
  );
}

const wikiShareStack = createNativeStackNavigator();

// TODO: Write the favourite page
export function ShareScreen(props) {
  return (
    <DevStatus status="developing">
      <wikiShareStack.Navigator
        screenOptions={{
          mode: "card",
          headerShown: true,
        }}
      >
        <wikiShareStack.Screen
          name="WikiShare"
          component={WikiShare}
          options={{
            header: ({ navigation, scene }) => (
              <Header back title="WikiShare" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: "#F8F9FE" },
          }}
        />
      </wikiShareStack.Navigator>
    </DevStatus>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Account" component={RegisterStackScreen} />
      <Drawer.Screen name="Elements" component={ElementsStackScreen} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="Articles" component={ArticlesStackScreen} options={{ headerShown: false }} /> */}
      <Drawer.Screen
        name="Search"
        component={SearchStackScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Tags" component={TagStackScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="ICOfficialSite" component={WebPageScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
