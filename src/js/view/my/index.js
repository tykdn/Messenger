/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import mySetting from "../../config/mySettings";
import { Text, View, StyleSheet, PixelRatio, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome";
import TextButton from "../../component/textButton";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";

export default class My extends Component {
  constructor(props) {
    super(props);
    this.rendlist = this.rendlist.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "我",
      headerLeft: (
        <View style={{ paddingLeft: px2dp(16) }}>
          <TextButton
            onPress={() => navigation.goBack()}
            text={"完成"}
            fontSize={px2dp(15)}
            color={"rgb(92,133,194)"}
          />
        </View>
      ),
      headerStyle: {
        // backgroundColor: '#fff',
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "500"
      }
    };
  };
  rendlist(list, i) {
    return (
      <View style={{ marginBottom: 40 }} key={i}>
        {list.map((item, index) => (
          <Item
            key={index}
            goto={item.key}
            value={item.value}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: px2dp(32)
            }}
          >
            <Avatar
              size={px2dp(80)}
              image={{
                uri:
                  "https://timgsa.baidu.com/timg?image&qualit" +
                  "y=80&size=b10000_10000&sec=1545814744&di=88720d8768c3be" +
                  "ec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
              }}
            />
            <Text style={{ fontSize: 24, color: "black" }}>Xiaoming Xiao</Text>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Ionicons
                name={"exclamation-circle"}
                size={px2dp(15)}
                style={{ color: "red", lineHeight: px2dp(32) }}
              />
              <View
                style={{
                  backgroundColor: "rgb(229,229,229)",
                  padding: px2dp(8),
                  height: px2dp(32),
                  marginLeft: 10
                }}
              >
                <TextButton
                  fontSize={16}
                  text={"添加头像"}
                  color={"rgb(92,133,194)"}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            {[
              this.rendlist(mySetting[0].common, 0),
              this.rendlist(mySetting[1].user, 1),
              this.rendlist(mySetting[2].setting, 2)
            ]}
          </ScrollView>
        </View>
      </View>
    );
  }
}

class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    value: PropTypes.string,
    goto: PropTypes.string
  };
  render() {
    const { goto, name, value, icon } = this.props;
    return (
      <View style={styles.item}>
        <View style={{ ...styles.icon, backgroundColor: icon.bgc }}>
          <Ionicons name={icon.key} size={px2dp(25)} color={icon.color} />
        </View>
        <Text
          style={{
            fontSize: theme.actionBar.fontSize,
            color: "#000",
            marginLeft: px2dp(20)
          }}
        >
          {name}
        </Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <Text style={{ marginLeft: 10 }}>{value}</Text>
          <Ionicons name="angle-right" size={px2dp(20)} color="#ccc" />
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
  avatar: {
    height: px2dp(200),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(244,244,244)"
  },
  item: {
    flexDirection: "row",
    height: px2dp(49),
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20),
    borderBottomColor: "#ccc",
    borderBottomWidth: 1 / PixelRatio.get()
  },
  icon: {
    width: px2dp(30),
    height: px2dp(30),
    borderTopRightRadius: px2dp(5),
    borderBottomEndRadius: px2dp(5),
    borderBottomLeftRadius: px2dp(5),
    borderTopLeftRadius: px2dp(5),
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center"
  }
});
