import React, { Component } from "react";
import { View, ScrollView, RefreshControl, Text } from "react-native";
import theme from "../../config/theme";

export default class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      loadedData: false,
      dataBlob: []
    };
  }
  render() {
    return (
      <ScrollView
        style={{}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            colors={["red", "#ffd500", "#0080ff", "#99e600"]}
            tintColor={theme.themeColor}
            title="Loading..."
            titleColor={theme.themeColor}
          />
        }
      >
        {this._renderContents()}
      </ScrollView>
    );
  }

  _renderContents() {
    if (!this.state.refreshing || this.state.loadedData) {
      return (
        <View>
          <Text>首页</Text>
        </View>
      );
    }
  }

  _onRefresh() {
    this.setState({ refreshing: true });
  }
}
