import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import px2dp from "../../utils/px2dp";
import PropTypes from "prop-types";
export default class TextButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    fontSize: PropTypes.number
  };

  static defaultProps = {
    color: "white",
    fontSize: px2dp(12)
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ height: px2dp(16) }}>
          <Text
            style={{ fontSize: this.props.fontSize, color: this.props.color }}
          >
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
