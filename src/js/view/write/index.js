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
  ScrollView,
  TouchableOpacity
} from "react-native";
import TextButton from "../../component/textButton";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";
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
          <Item key={index} name={item.name} />
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
          <ScrollView>{[this.rendlist()]}</ScrollView>
        </View>
      </View>
    );
  }
}

class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  go() {}
  render() {
    const { name } = this.props;
    px2dp(40);
    return (
      <View style={styles.item}>
        <View style={styles.avatar}>
          <TouchableOpacity onPress={this.go.bind(this, "My")}>
            <Avatar
              size={px2dp(36)}
              image={{
                uri:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1545814744&di=88720d8768c3beec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: px2dp(49),
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc"
          }}
        >
          <Text
            style={{
              fontSize: theme.actionBar.fontSize,
              color: "#000",
              marginLeft: px2dp(10)
            }}
          >
            {name}
          </Text>
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
  },
  avatar: {
    height: px2dp(40)
  },
  item: {
    flexDirection: "row",
    height: px2dp(49),
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20)
    // borderBottomColor: "#ccc",
    // borderBottomWidth: 1 / PixelRatio.get()
  }
});
