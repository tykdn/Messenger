/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../theme/theme";
import Home from "../view/home";
import Discovery from "../view/discovery";
import Online from "../view/online";

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>HomeScreen</Text>
  </View>
);
const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={"comment"}
            size={26}
            style={
              focused
                ? { color: theme.footerIconSelectColor }
                : { color: theme.footerIconColor }
            }
          />
        )
      }
    },
    Users: {
      screen: Online,
      navigationOptions: {
        tabBarLabel: "用户",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={"users"}
            size={26}
            style={
              focused
                ? { color: theme.footerIconSelectColor }
                : { color: theme.footerIconColor }
            }
          />
        )
      }
    },
    // Camera: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     tabBarLabel: "",
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Icon name={"camera"} size={26} style={{ color: tintColor }} />
    //     )
    //   }
    // },

    // Game: {
    //   screen: ProfileScreen,
    //   navigationOptions: {
    //     tabBarLabel: "游戏",
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Icon
    //         name={"gamepad"}
    //         size={26}
    //         style={focused ? { color: tintColor } : { color: "#dbdbdb" }}
    //       />
    //     )
    //   }
    // },
    Discover: {
      screen: Discovery,
      navigationOptions: {
        tabBarLabel: "发现",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={"compass"}
            size={30}
            style={
              focused
                ? { color: theme.footerIconSelectColor }
                : { color: theme.footerIconColor }
            }
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        marginLeft: "21%",
        borderTopWidth: 0,
        elevation: 0,
        width: 230,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0)"
      }
    }
  }
);
const Page = createAppContainer(AppNavigator);
export default Page;
