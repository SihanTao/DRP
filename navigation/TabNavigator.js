// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, SearchStackScreen, ShareScreen, ArticlesStackScreen } from "./Screens";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                component={HomeStackScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen name="Search"
                component={SearchStackScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }}
            />
            {/* <Tab.Screen name="Favourite"
                component={ArticlesStackScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            /> */}
            {/* <Tab.Screen name="Share"
                component={ShareScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={size} />
                    ),
                }}
            /> */}
            {/* <Tab.Screen name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;