import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "../home";
import Ionicons from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>HomeScreen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>ProfileScreen</Text>
  </View>
);

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "首页",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={"home"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  },
  User: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "通话",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={"phone"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  },
  Camera: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={"camera"} size={26} style={{ color: tintColor }} />
      )
    }
  },
  Discover: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "用户",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={"users"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  },
  Game: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "游戏",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={"gamepad"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  }
});
const Page = createAppContainer(AppNavigator);
export default Page;
