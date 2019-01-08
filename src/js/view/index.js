import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Page from "./navigation";
import Write from "./write";
import My from "./my";
import Chat from "./chat";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Page,
      navigationOptions: () => ({
        header: null
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
      navigationOptions: () => ({})
    }
  },
  {
    initialRouteName: "Home"
  }
);
const Root = createAppContainer(RootStack);

export default Root;
