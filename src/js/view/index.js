import React, { Component } from "react";
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Page from "./navigation";
import Write from './write'

const RootStack = createStackNavigator({
    Home: {
        screen: Page,
        navigationOptions: () => ({}),
    },
    Write:{
        screen: Write,
        navigationOptions: () => ({}),
    }
},{headerMode: 'none'});
const Root = createAppContainer(RootStack);

export default Root;
