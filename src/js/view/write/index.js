/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  PixelRatio,
  ScrollView
} from "react-native";
import TextButton from "../../component/textButton";
import px2dp from "../../utils/px2dp";
import ListItem from "../../component/listItem";
class UselessTextInput extends Component {
  render() {
    return <TextInput {...this.props} editable={true} maxLength={40} />;
  }
}
export default class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: [
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        },
        {
          name: "xiaoxiaomin"
        }
      ]
    };
    this.rendlist = this.rendlist.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "新消息",
      headerLeft: (
        <View style={{ paddingLeft: px2dp(16) }}>
          <TextButton
            onPress={() => navigation.goBack()}
            text={"取消"}
            fontSize={px2dp(15)}
            color={"rgb(92,133,194)"}
          />
        </View>
      ),
      headerRight: (
        <View style={{ paddingRight: px2dp(16) }}>
          <TextButton
            onPress={() => navigation.goBack()}
            text={"私密"}
            fontSize={px2dp(15)}
            color={"rgb(92,133,194)"}
          />
        </View>
      ),
      headerTintColor: "#000",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "500"
      }
    };
  };
  rendlist() {
    return (
      <View style={{ marginBottom: 40 }}>
        {this.state.list.map((item, index) => (
          <ListItem key={index} name={item.name} />
        ))}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <View
            style={{
              borderBottomColor: "#dbdbdb",
              borderBottomWidth: 1,
              height: px2dp(50),
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 90 }}>
              <Text style={styles.text}>收件人：</Text>
            </View>
            <View style={{ flex: 1 }}>
              <UselessTextInput
                multiline={true}
                numberOfLines={1}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
            </View>
          </View>
          <View
            style={{
              height: px2dp(30),
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>用户</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>{this.rendlist()}</ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(244,244,244)"
  },
  input: {
    height: px2dp(80)
  },
  text: {
    paddingLeft: px2dp(20)
  }
});
