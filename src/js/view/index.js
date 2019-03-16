/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Page from "../navigation";
import Write from "./write";
import My from "./my";
import Chat from "./chat";
import Users from "./users";
import IdCard from "./idCard";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Page,
      navigationOptions: () => ({
        header: null
      })
    },
    IdCard: {
      screen: IdCard,
      navigationOptions: () => ({
        headerStyle: {
          // marginBottom:50,
          elevation: 0,
          borderBottomWidth: 0
        },
        shadowOpacity: 0
      })
    },
    Write: {
      screen: Write,
      navigationOptions: () => ({})
    },
    My: {
      screen: My,
      navigationOptions: () => ({})
    },
    Chat: {
      screen: Chat,
      navigationOptions: () => ({
        // headerTransparent: true,
        headerStyle: {
          // marginBottom:50,
          elevation: 0,
          borderBottomWidth: 0
        },
        shadowOpacity: 0
      })
    },
    AddUser: {
      screen: Users,
      navigationOptions: () => ({
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0
        },
        shadowOpacity: 0
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);
const Root = createAppContainer(RootStack);

export default Root;
