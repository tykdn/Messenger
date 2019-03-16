/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import MessageList from "./messageList";
import theme from "../../theme/theme";
import Header from "../../component/header";
import PublishSnapshot from "../../component/publishSnapshot";
import { getFriendsList } from "../../redux/actions";

import store from "../../redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }
  componentDidMount() {
    const states = store.getState();
    console.log("states", states);
  }
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Header
          navigation={this.navigation}
          rightButtonArray={[
            { icon: "camera", page: "Write" },
            { icon: "edit", page: "Write" }
          ]}
          name={"对话"}
        />
        <View>
          <Text>{text}</Text>
        </View>
        <PublishSnapshot
          navigation={this.navigation}
          item={{
            title: "你的快拍",
            subTitle: "发布快拍",
            icon: "plus",
            page: "Write"
          }}
        />
        <MessageList navigation={this.navigation} />
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
const mapStateToProps = state => {
  const { text } = state;
  return {
    text
  };
};

export default connect(mapStateToProps)(Home);
