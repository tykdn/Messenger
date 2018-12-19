import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../config/theme";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "../../component/tabBar";
import HomeTab from "./HomeTab";
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";
import SearchBar from "../../component/searchBar";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ["消息", "在线", "群聊"]
        };
        this._handleTabNames = this._handleTabNames.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar onPress={this._pullDownCallback.bind(this)} />
                <ScrollableTabView
                    renderTabBar={() => (
                        <TabBar  />
                    )}
                    tabBarBackgroundColor="rgb(248,248,248)"
                    tabBarActiveTextColor="rgb(108,140,194)"
                    tabBarInactiveTextColor="rgb(160,160,160)"
                    locked={true}
                    tabBarTextStyle={{ fontSize: theme.scrollView.fontSize }}
                    tabBarUnderlineStyle={theme.scrollView.underlineStyle}
                >
                    {this.state.tabNames.map((item, i) => {
                        return <HomeTab tabLabel={item} key={i} tabTag={item} />;
                    })}
                </ScrollableTabView>
            </View>
        );
    }

    _pullDownCallback() {
        this.props.navigation.navigate("Write");
    }

    componentDidMount() {
        RCTDeviceEventEmitter.addListener("valueChange", this._handleTabNames);
    }

    componentWillUnmount() {
        RCTDeviceEventEmitter.removeListener("value", this._handleTabNames);
    }

    _handleTabNames(tabNames) {
        this.setState({ tabNames: tabNames });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    }
});
