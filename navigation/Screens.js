import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

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

const { width } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}>
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function RegisterStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Account"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Account" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}


function ArticlesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
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

      <Stack.Screen
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
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "float",
      }}
    >
      <Stack.Screen
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
    </Stack.Navigator>
  );
}

function TagStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Tags"
        component={TagDemo}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Tags" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

    </Stack.Navigator>
  );
}

function SearchResultStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="SearchResult" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />

    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  initializeApp(firebaseConfig);
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
      <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Account" component={RegisterStack} />
      <Drawer.Screen name="Elements" component={ElementsStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Articles" component={ArticlesStack} options={{ headerShown: false }} />
      <Drawer.Screen name="SearchResult" component={SearchResultStack} options={{ headerShown: false }}/>
      <Drawer.Screen name="Tags" component={TagStack} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
