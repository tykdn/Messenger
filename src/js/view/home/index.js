/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import MessageList from "./messageList";
import theme from "../../config/theme";
import SearchBar from "../../component/searchBar";
import Header from "../../component/header"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }
  render() {
    return (
      <View style={styles.container}>
          <Header/>
          <SearchBar/>
          <MessageList  navigation={this.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pageBackgroundColor
  }
});
