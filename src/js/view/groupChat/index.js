/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import TextButton from "../../component/textButton";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";

export default class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.rendlist = this.rendlist.bind(this);
  }
  rendlist() {
    const { list } = this.state;
    return (
      <View style={{ marginBottom: 40 }}>
        {list.length > 0 ? (
          list.map((item, index) => <Item key={index} name={item.name} />)
        ) : (
          <NoDota />
        )}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <View
            style={{
              borderBottomColor: "#dbdbdb",
              borderBottomWidth: 0.5,
              height: px2dp(50),
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 60, paddingLeft: px2dp(20) }}>
              <Icon
                name={"users"}
                size={20}
                style={{ color: "rgb(67,139,236)" }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "black" }}>创建群聊</Text>
            </View>
          </View>
          <View
            style={{
              height: px2dp(30),
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>你的群聊</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>{[this.rendlist()]}</ScrollView>
        </View>
      </View>
    );
  }
}

class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  go() {}
  render() {
    const { name } = this.props;
    px2dp(40);
    return (
      <View style={styles.item}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={this.go.bind(this, "My")}>
            <Avatar
              size={px2dp(36)}
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
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: "#ccc"
          }}
        >
          <Text
            style={{
              fontSize: theme.actionBar.fontSize,
              color: "#000",
              marginLeft: px2dp(10)
            }}
          >
            {name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name={"phone"}
              size={20}
              style={{ color: "rgb(67,139,236)", marginRight: 20 }}
            />
            <Icon
              name={"users"}
              size={20}
              style={{ color: "rgb(67,139,236)" }}
            />
          </View>
        </View>
      </View>
    );
  }
}
class NoDota extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.nodata}>
          <Text style={{ fontSize: 16, color: "black", lineHeight: 20 }}>
            创建群聊
          </Text>
          <Text style={{ fontSize: 14 }}>与好友开始对话</Text>
        </View>
        <Text
          style={{ color: "rgb(67,139,236)", fontSize: 16, paddingTop: 15 }}
        >
          创建
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  nodata: {
    flex: 1,
    width: "100%",
    borderBottomWidth: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc"
  },
  input: {
    height: px2dp(80)
  },
  text: {
    paddingLeft: px2dp(20),
    color: "black"
  },
  avatar: {
    height: px2dp(40)
  },
  item: {
    flexDirection: "row",
    height: px2dp(49),
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20)
  }
});
