/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import px2dp from "../../utils/px2dp";
import ListItem from "../../component/listItem";
import TextButton from "../../component/textButton";

export default class IdCard extends Component {
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: "用户",
      headerLeft: (
        <View
          style={{
            paddingLeft: px2dp(16),
            flexDirection: "row",
            textAlign: "center"
          }}
        >
          <Icon
            name={"chevron-left"}
            size={px2dp(20)}
            color={"black"}
            style={{ marginRight: px2dp(10) }}
          />
          <TextButton
            onPress={() => navigation.goBack()}
            text={"返回"}
            fontSize={px2dp(15)}
            color={"black"}
          />
        </View>
      ),
      headerTintColor: "#000",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "500"
      }
    };
  };
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
        <View style={styles.message}>
          <Text style={styles.text}>MESSENGER用户</Text>
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
  message: {
    height: px2dp(35)
  },
  text: {
    paddingLeft: px2dp(20),
    color: "black"
  }
});
