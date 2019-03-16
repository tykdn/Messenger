import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import { search } from "../../redux/actions";

class SearchBar extends Component {
  static propTypes = {
    search: PropTypes.func,
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
        <TextInput
          style={styles.inputBox}
          placeholder="搜索"
          onChangeText={text => {
            this.props.search(text);
          }}
        />
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
    height: px2dp(38),
    paddingLeft: px2dp(13),
    paddingRight: px2dp(13),
    backgroundColor: theme.searchColor,
    alignItems: "center",
    marginRight: px2dp(8),
    marginLeft: px2dp(8),
    borderRadius: px2dp(8)
  },
  inputBox: {
    height: 40,
    flex: 1,
    fontSize: px2dp(15),
    color: theme.headerTextColor,
    marginLeft: px2dp(13)
  }
});
const mapStateToProps = state => {
  const { text } = state;
  return {
    text
  };
};
function mapDispatchToProps(dispatch) {
  console.log(3232);
  return {
    search: text => dispatch(search(text))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
