import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import theme from "../../config/theme";
import px2dp from "../../utils/px2dp";
import Icon from "react-native-vector-icons/Ionicons";

export default class SearchBar extends Component {
  static propTypes = {
    onPress: PropTypes.func
  };

  render() {
    if (Platform.OS === "android") {
      return (
        <View style={styles.container}>
          <TouchableNativeFeedback onPress={this.props.onPress}>
            {this.renderContent()}
          </TouchableNativeFeedback>
        </View>
      );
    } else if (Platform.OS === "ios") {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.onPress}
            activeOpacity={theme.btnActiveOpacity}
          >
            {this.renderContent()}
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderContent() {
    return (
      <View style={styles.searchBar}>
        <Icon
          name="ios-search"
          size={px2dp(25)}
          color={theme.headerTextColor}
        />
        <Text style={styles.text}>搜索</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: theme.actionBar.height,
    backgroundColor: theme.pageBackgroundColor,
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? px2dp(20) : 0
  },
  searchBar: {
    flexDirection: "row",
    height: px2dp(33),
    paddingLeft: px2dp(13),
    paddingRight: px2dp(13),
    backgroundColor: theme.searchColor,
    alignItems: "center",
    marginRight: px2dp(8),
    marginLeft: px2dp(8),
    borderRadius: px2dp(8)
  },
  text: {
    fontSize: px2dp(15),
    color: theme.headerTextColor,
    marginLeft: px2dp(13)
  }
});
