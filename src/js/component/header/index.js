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
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    rightButtonArray: PropTypes.oneOfType([PropTypes.func, PropTypes.func]),
    name: PropTypes.string
  };
  static defaultProps = {
    rightButtonArray: [
      {
        icon: "edit",
        page: "Write"
      }
    ],
    name: "对话"
  };
  render() {
    const { name, rightButtonArray } = this.props;
    return (
      <View style={styles.header}>
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
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.rightIcon}>
          {rightButtonArray.map(item => (
            <View style={theme.iconBg}>
              <TouchableOpacity onPress={this.go.bind(this, item.page)}>
                <Icon
                  name={item.icon}
                  size={px2dp(25)}
                  color={theme.themeColor}
                />
              </TouchableOpacity>
            </View>
          ))}
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
    height: px2dp(60),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.headerBackgroundColor,
    flexDirection: "row"
  },
  name: {
    color: theme.text.color,
    fontSize: px2dp(35),
    marginLeft: px2dp(15)
  },
  avatar: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: px2dp(15),
    marginLeft: px2dp(10)
  },
  rightIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  }
});
