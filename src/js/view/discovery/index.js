/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView
} from "react-native";
import theme from "../../theme/theme";
import Header from "../../component/header";
import px2dp from "../../utils/px2dp";
import PropTypes from "prop-types";
import Avatar from "../../component/avatar";

class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "for-you",
      avatorlist: [
        {
          name: "xiaoxiaomin",
          greetable: true
        }
      ],
      recomandlist: [
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        }
      ]
    };
    this.navigation = this.props.navigation;
  }
  changeTab = key => event => {
    console.log(key);
    this.setState({ key });
  };
  render() {
    const { key } = this.state;
    return (
      <View style={styles.container}>
        <Header
          navigation={this.navigation}
          rightButtonArray={[]}
          name={"发现"}
        />
        <ScrollView>
          <View style={styles.tabContainer}>
            <View style={key === "for-you" ? styles.tabActive : styles.tab}>
              <TouchableNativeFeedback onPress={this.changeTab("for-you")}>
                <Text
                  style={
                    key === "for-you" ? styles.tabTitleActive : styles.tabTitle
                  }
                >
                  为你精选
                </Text>
              </TouchableNativeFeedback>
            </View>
            <View style={key === "shop" ? styles.tabActive : styles.tab}>
              <TouchableNativeFeedback onPress={this.changeTab("shop")}>
                <Text
                  style={
                    key === "shop" ? styles.tabTitleActive : styles.tabTitle
                  }
                >
                  商家
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>
          {key === "for-you" ? <Text style={styles.subTitle}>近期</Text> : null}
          {key === "for-you" ? (
            <View style={styles.item}>
              <View style={styles.avatar}>
                <TouchableOpacity>
                  <Avatar
                    size={px2dp(50)}
                    image={{
                      uri:
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
                    }}
                  />
                </TouchableOpacity>
                <Text>Messenger</Text>
              </View>
            </View>
          ) : null}
          <Text style={styles.subTitle}>
            {key === "for-you" ? "更多" : "热门"}
          </Text>
          {this.state.recomandlist.map((item, index) => (
            <AvatorItem key={index} item={item} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
class AvatorItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  go() {}
  render() {
    const { item } = this.props;
    px2dp(40);
    return (
      <View style={styles.item}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={this.go.bind(this, "My")}>
            <Avatar
              size={px2dp(50)}
              image={{
                uri:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: px2dp(49),
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: theme.actionBar.fontSize,
                color: "#000",
                marginLeft: px2dp(10)
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "rgb(193,193,193)",
                marginLeft: px2dp(10)
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pageBackgroundColor
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: px2dp(13),
    paddingRight: px2dp(13),
    height: px2dp(50)
  },
  tab: {
    height: px2dp(30),
    flex: 1,
    justifyContent: "center"
  },
  tabActive: {
    color: "black",
    height: px2dp(30),
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(196,196,196,0.3)",
    borderRadius: px2dp(12)
  },
  tabTitle: {
    textAlign: "center"
  },
  tabTitleActive: {
    color: "black",
    textAlign: "center"
  },
  avatar: {
    height: px2dp(40),
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flexDirection: "row",
    height: px2dp(80),
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20)
  },
  subTitle: {
    height: px2dp(40),
    paddingLeft: px2dp(20),
    color: "black",
    fontSize: px2dp(30)
  }
});

export default Discovery;
