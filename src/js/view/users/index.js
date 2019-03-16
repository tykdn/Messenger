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
  ScrollView,
  TouchableOpacity
} from "react-native";
import theme from "../../theme/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";
import Icon from "react-native-vector-icons/FontAwesome";
import TextButton from "../../component/textButton";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      iconList: [
        {
          name: "扫描代码",
          value: "!",
          key: "Notice",
          icon: { key: "instagram", color: "black", bgc: "rgb(146,146,146)" }
        },
        {
          name: "邀请",
          value: "开启",
          key: "OnlineStatus",
          icon: { key: "home", color: "black", bgc: "rgb(114,215,105)" }
        },
        {
          name: "请求",
          value: "m.me/tykdn",
          key: "Account",
          icon: { key: "comment", color: "black", bgc: "rgb(238,76,66)" }
        },
        {
          name: "添加",
          value: "添加手机号",
          key: "PhoneNumber",
          icon: { key: "plus-circle", color: "black", bgc: "rgb(87,94,207)" }
        }
      ],
      itmeList: [
        {
          key: "address-book",
          text: "上传通讯录"
        },
        {
          key: "instagram",
          text: "关联 Instagram"
        }
      ],
      avatorlist: [
        {
          name: "xiaoxiaomin",
          greetable: true
        }
      ],
      recomandlist: [
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
      title: "添加联系人",
      headerLeft: (
        <View
          style={{
            paddingLeft: px2dp(16),
            flexDirection: "row",
            textAlign: "center"
          }}
        >
          <Icon
            name={"chevron-left"}
            size={px2dp(20)}
            color={"black"}
            style={{ marginRight: px2dp(10) }}
          />
          <TextButton
            onPress={() => navigation.goBack()}
            text={"返回"}
            fontSize={px2dp(15)}
            color={"black"}
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
      <View>
        {this.state.itmeList.map((item, index) => (
          <Item key={index} name={item.key} text={item.text} />
        ))}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderBottomColor: "#dbdbdb",
                borderBottomWidth: 1
              }}
            >
              <View
                style={{
                  height: px2dp(100),
                  width: "80%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {this.state.iconList.map((item, index) => (
                  <IconItem
                    key={index}
                    goto={item.key}
                    value={item.value}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </View>
            </View>
            {this.rendlist()}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
                paddingLeft: px2dp(20),
                paddingRight: px2dp(20)
              }}
            >
              <Text>更新</Text>
              <Text style={{ color: "black" }}>显示全部</Text>
            </View>
            {this.state.avatorlist.map((item, index) => (
              <AvatorItem key={index} item={item} />
            ))}

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
                paddingLeft: px2dp(20),
                paddingRight: px2dp(20)
              }}
            >
              <Text>推荐用户</Text>
            </View>
            {this.state.recomandlist.map((item, index) => (
              <AvatorItem key={index} item={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
class AvatorItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  go() {}
  render() {
    const { item } = this.props;
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: "#ccc"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: theme.actionBar.fontSize,
                color: "#000",
                marginLeft: px2dp(10)
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "rgb(193,193,193)",
                marginLeft: px2dp(10)
              }}
            >
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {item.greetable ? null : (
              <View style={theme.iconBg}>
                <Icon name={"check"} size={24} style={{}} />
              </View>
            )}
            <View style={theme.iconBg}>
              <Icon name={"times"} size={24} style={{}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string
  };
  go() {}
  render() {
    const { name, text } = this.props;
    px2dp(40);
    return (
      <View style={styles.item}>
        <View style={theme.iconBg}>
          <TouchableOpacity onPress={this.go.bind(this, "My")}>
            <Icon name={name} size={px2dp(25)} color={"black"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: px2dp(49),
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc"
          }}
        >
          <Text
            style={{
              fontSize: theme.actionBar.fontSize,
              color: "#000",
              marginLeft: px2dp(15)
            }}
          >
            {text}
          </Text>
          <Icon
            name={"chevron-right"}
            size={20}
            style={{ color: "#ccc", marginRight: 10 }}
          />
        </View>
      </View>
    );
  }
}
class IconItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    value: PropTypes.string,
    goto: PropTypes.string
  };
  render() {
    const { goto, name, value, icon } = this.props;
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          marginLeft: px2dp(20),
          marginRight: px2dp(20)
        }}
      >
        <View style={{ ...theme.iconBg }}>
          <Icon name={icon.key} size={px2dp(25)} color={icon.color} />
        </View>
        <Text
          style={{
            fontSize: 14,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          {name}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  searchBar: {
    height: 55,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  text: {
    paddingLeft: px2dp(20)
  },
  avatar: {
    height: px2dp(40),
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: px2dp(50),
    height: px2dp(50),
    borderRadius: px2dp(25),
    justifyContent: "center",
    backgroundColor: "rgb(55,131,247)",
    alignItems: "center"
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
