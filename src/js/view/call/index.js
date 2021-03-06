/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ListItem from "../../component/listItem";
import Icon from "react-native-vector-icons/FontAwesome";
import px2dp from "../../utils/px2dp";

export default class Call extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
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
    this.rendlist = this.rendlist.bind(this);
  }
  rendlist() {
    return (
      <View style={{ marginBottom: 40 }}>
        {this.state.list.map((item, index) => (
          <ListItem key={index} name={item.name} />
        ))}
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
              <Text style={{ color: "black" }}>开始群通话</Text>
            </View>
          </View>
          <View
            style={{
              height: px2dp(30),
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>推荐用户</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>{this.rendlist()}</ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  input: {
    height: px2dp(80)
  },
  text: {
    paddingLeft: px2dp(20),
    color: "black"
  }
});
