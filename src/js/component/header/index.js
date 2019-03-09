/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={this.go.bind(this, "My")}>
            <Avatar
              size={px2dp(40)}
              image={{
                uri:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={this.go.bind(this, "Write")}>
            <Icon
              name={"edit"}
              size={px2dp(30)}
              style={{ color: theme.themeColor }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  go(page) {
    this.props.navigation.navigate(page);
  }
}

const styles = StyleSheet.create({
  header: {
    height: px2dp(50),
    justifyContent: "space-between",
    backgroundColor: theme.headerBackgroundColor,
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
    opacity: 0.3,
    alignContent: "center",
    marginLeft: px2dp(15),
    marginRight: px2dp(10),
    height: px2dp(40),
    width: px2dp(40),
    borderRadius: px2dp(40),
    backgroundColor: theme.grayColor
  },
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  }
});
