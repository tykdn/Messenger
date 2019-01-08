import React, { Component } from "react";
import { View, StyleSheet ,TouchableOpacity} from "react-native";
import theme from "../../config/theme";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Ionicons from "react-native-vector-icons/FontAwesome";
import TabBar from "../../component/tabBar";
import MessageList from "./messageList";
import RCTDeviceEventEmitter from "RCTDeviceEventEmitter";
import SearchBar from "../../component/searchBar";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state = {
      tabNames: ["消息", "在线", "群聊"]
    };
    this._handleTabNames = this._handleTabNames.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Avatar
                  size={px2dp(30)}
                  image={{
                      uri:
                          "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
                  }}
              />
            </View>
                <View style={styles.searchbar}>
              <SearchBar  />
                </View>
                    <View style={styles.icon}  >
                        <TouchableOpacity onPress={this._pullDownCallback.bind(this)}>
                            <Ionicons
                                name={"edit"}
                                size={px2dp(30)}
                                style={{color:'rgb(110,148,211)'}}
                            />
                        </TouchableOpacity>
                    </View>
          </View>

        <ScrollableTabView
          renderTabBar={() => <TabBar />}
          tabBarBackgroundColor="rgb(248,248,248)"
          tabBarActiveTextColor="rgb(108,140,194)"
          tabBarInactiveTextColor="rgb(160,160,160)"
          locked={true}
          tabBarTextStyle={{ fontSize: theme.scrollView.fontSize }}
          tabBarUnderlineStyle={theme.scrollView.underlineStyle}
        >
          {this.state.tabNames.map((item, i) => {
            return (
              <MessageList
                navigation={this.navigation}
                tabLabel={item}
                key={i}
                tabTag={item}
              />
            );
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
    header:{
      flexDirection: 'row'
    },
    searchbar:{
      flex:1
    },
    avatar:{
      justifyContent: 'center',
      marginRight: px2dp(15),
      marginLeft:px2dp(10),
    },
    icon:{
      justifyContent: 'center',
      marginLeft:px2dp(15),
      marginRight: px2dp(10),
    },
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  }
});
