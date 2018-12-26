import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  ListView,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import px2dp from "../../utils/px2dp";
import theme from "../../config/theme";
import Avatar from "../avatar";

export default class InformationList extends Component {
  static propTypes = {
    isRenderHeader: PropTypes.bool
  };

  static defaultProps = {
    isRenderHeader: false
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.source)
    };
  }
  _renderItem(rowData, sectionID, rowID, highlightRow) {
    if (Platform.OS === "ios") {
      return (
        <TouchableOpacity
          onPress={this.props.goToChat}
          activeOpacity={theme.btnActiveOpacity}
        >
          {this._renderItemContent(rowData)}
        </TouchableOpacity>
      );
    } else if (Platform.OS === "android") {
      return (
        <TouchableNativeFeedback onPress={this.props.goToChat}>
          {this._renderItemContent(rowData)}
        </TouchableNativeFeedback>
      );
    }
  }

  _renderItemContent(rowData) {
    return (
      <View style={styles.item}>
        <View
          style={{
            width: px2dp(55),
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Avatar
            size={px2dp(40)}
            image={{
              uri:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
            }}
          />
        </View>
        <View
          style={{
            width: px2dp(100),
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Text style={styles.content} numberOfLines={2}>
            {rowData.title}
          </Text>
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText} numberOfLines={1}>
              你：hello
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <View style={styles.infoBar}>
            <Text style={styles.infoBarText} numberOfLines={1}>
              {rowData.time}
            </Text>
          </View>
          <Avatar
            size={px2dp(10)}
            image={{
              uri:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
            }}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: theme.screenWidth,
    height: px2dp(70),
    backgroundColor: "#fff",
    paddingLeft: px2dp(15),
    paddingRight: px2dp(17)
  },
  content: {
    color: theme.titleColor,
    fontSize: px2dp(15)
  },
  infoBar: {
    flexDirection: "row",
    marginTop: px2dp(3)
  },
  infoBarText: {
    fontSize: px2dp(11),
    color: theme.secondTitleColor
  }
});
