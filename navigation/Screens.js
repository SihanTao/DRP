import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs, articles } from "../constants";
import studySpaces from "../constants/studySpaces"

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
import BottomTabNavigator from "./TabNavigator";

const { width } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();

import { addStudySpaces } from "../backend/databaseReadWrite";

export default function OnboardingStack(props) {
  initializeApp(firebaseConfig);
  addStudySpaces(studySpaces);
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

export function HomeStackScreen(props) {
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
        name="SearchResult"
        component={SearchResultStackScreen}
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

const SearchResultStack = createNativeStackNavigator();

function SearchResultStackScreen(props) {
  return (
    <SearchResultStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <SearchResultStack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="SearchResult" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

    </SearchResultStack.Navigator>
  );
}

const favouriteStack = createNativeStackNavigator();

// TODO: Write the favourite page
export function FavouriteScreen(props) {
  return (
    <favouriteStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <favouriteStack.Screen
        name="Favourite"
        component={SearchResult}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="SearchResult" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

    </favouriteStack.Navigator>
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
      <Drawer.Screen name="Tags" component={TagStackScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
