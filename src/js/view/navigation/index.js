import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../home";
import Users from "../users";

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
        <Icon
          name={"home"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  },
  User: {
    screen: Users,
    navigationOptions: {
      tabBarLabel: "用户",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={"users"}
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
        <Icon name={"camera"} size={26} style={{ color: tintColor }} />
      )
    }
  },

  Game: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "游戏",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={"gamepad"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  },
  Discover: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "发现",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={"th-list"}
          size={26}
          style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
        />
      )
    }
  }
});
const Page = createAppContainer(AppNavigator);
export default Page;
