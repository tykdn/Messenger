import { Component } from "react";
import PropTypes from "prop-types";
import px2dp from "../../utils/px2dp";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../avatar";
import theme from "../../theme/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

export default class ListItem extends Component {
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
            <Icon name={"id-card"} size={20} style={{}} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
