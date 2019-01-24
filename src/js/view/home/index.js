import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Ionicons from "react-native-vector-icons/FontAwesome";
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";
import MessageList from "./messageList";
import theme from "../../config/theme";
import Call from "../call";
import GroupChat from "../groupChat";
import SearchBar from "../../component/searchBar";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state = {
      page: 0,
      tabNames: ["消息", "在线", "群聊", "通话"]
    };
    // this.handleTabNames = this.handleTabNames.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <TouchableOpacity onPress={this.go.bind(this, "My")}>
              <Avatar
                size={px2dp(30)}
                image={{
                  uri:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBar}>
            <SearchBar />
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={this.go.bind(this, "Write")}>
              <Ionicons
                name={"edit"}
                size={px2dp(30)}
                style={{ color: "rgb(110,148,211)" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollableTabView
          tabBarBackgroundColor="white"
          page={this.state.page}
          tabBarActiveTextColor="rgb(108,140,194)"
          tabBarInactiveTextColor="rgb(160,160,160)"
          initialPage={3}
          tabBarTextStyle={{ fontSize: theme.scrollView.fontSize }}
          onChangeTab={obj => {
            this.setState({
              page: obj.i
            });
          }}
          tabBarUnderlineStyle={theme.scrollView.underlineStyle}
        >
          {this.showPage(this.state.tabNames)}
        </ScrollableTabView>
      </View>
    );
  }
  showPage(tabs) {
    const pages = [];
    tabs.map((item, i) => {
      if (i === 0) {
        pages.push(
          <MessageList
            tabLabel={item}
            key={i}
            tabLabel={item}
            navigation={this.navigation}
            tabLabel={item}
            key={i}
            tabTag={item}
          />
        );
      }
      if (i === 1) {
        pages.push(
          <MessageList
            tabLabel={item}
            key={i}
            tabLabel={item}
            navigation={this.navigation}
            tabLabel={item}
            key={i}
            tabTag={item}
          />
        );
      }
      if (i === 2) {
        pages.push(<GroupChat tabLabel={item} key={i} />);
      }
      if (i === 3) {
        pages.push(<Call tabLabel={item} key={i} />);
      }
    });
    return pages;
  }
  go(page) {
    this.props.navigation.navigate(page);
  }

  // componentDidMount() {
  //   RCTDeviceEventEmitter.addListener("valueChange", this.handleTabNames);
  // }
  //
  // componentWillUnmount() {
  //   RCTDeviceEventEmitter.removeListener("value", this.handleTabNames);
  // }
  //
  // handleTabNames(tabNames) {
  //   this.setState({ tabNames: tabNames });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pageBackgroundColor
  },
  header: {
    flexDirection: "row"
  },
  searchBar: {
    flex: 1
  },
  avatar: {
    justifyContent: "center",
    marginRight: px2dp(15),
    marginLeft: px2dp(10)
  },
  icon: {
    justifyContent: "center",
    marginLeft: px2dp(15),
    marginRight: px2dp(10)
  },
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  }
});
