/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import PropTypes from "prop-types";

export default class PublishSnapshot extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      icon: PropTypes.string,
      page: PropTypes.string
    })
  };
  static defaultProps = {
    item: {
      title: "你的快拍",
      subTitle: "发布快拍",
      icon: "plus",
      page: ""
    }
  };
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={theme.iconBg}>
          <TouchableOpacity onPress={this.go.bind(this, item.page)}>
            <Icon name={item.icon} size={px2dp(20)} color={theme.themeColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{item.title}</Text>
          <Text>{item.subTitle}</Text>
        </View>
      </View>
    );
  }
  go(page) {
    this.props.navigation.navigate(page);
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: px2dp(60),
    marginLeft: px2dp(15)
  },
  content: {},
  text: {
    color: theme.text.color,
    fontSize: theme.text.fontSize
  }
});
