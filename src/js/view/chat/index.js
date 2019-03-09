/**
 * @author wmhuang, hwmfuture@outlook.com
 * @version 0.0.1
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import data from "./data/config";
import {
  GiftedChat,
  Bubble,
  SystemMessage
} from "../../component/chat/GiftedChat";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      asksarray: [],
      surroundings: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      id: props.navigation.state.params.id,
      key: "facility"
    };
    console.log("key id", this.state.key, this.state.id);
    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.renderCustormConentpart = this.renderCustormConentpart.bind(this); //卡片
    this.renderInputToolbar = this.renderInputToolbar.bind(this);
    this.renderCustormHeadpart = this.renderCustormHeadpart.bind(this); //说明
    this.gotoHuman = this.gotoHuman.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this._isAlright = null;
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View
          style={{
            paddingLeft: px2dp(16),
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name={"chevron-left"}
              color={"rgb(41,106,252)"}
              size={px2dp(25)}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50
              }}
            >
              <Avatar
                size={px2dp(30)}
                image={{
                  uri:
                    "https://timgsa.baidu.com/timg?image&qualit" +
                    "y=80&size=b10000_10000&sec=1545814744&di=88720d8768c3be" +
                    "ec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
                }}
              />
            </View>
            <View>
              <Text style={{ color: "black" }}>tykdn</Text>
              <Text>Messenger</Text>
            </View>
          </View>
        </View>
      ),
      headerRight: (
        <View style={{ paddingRight: px2dp(16) }}>
          <Icon name={"phone"} size={px2dp(25)} color={"rgb(41,106,252)"} />
        </View>
      ),
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        fontWeight: "500"
      }
    };
  };
  componentWillMount() {
    const { key } = this.state;
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: data
      };
    });
  }
  turntoMessage(list) {
    return list.map(item => ({
      _id: Math.round(Math.random() * 1000000),
      text: item,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "React Native"
      }
    }));
  }
  componentDidMount() {
    this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  fetchData(type, url, param1, param2) {
    // const { id } = this.state;
    // let url = config.url+'hotels/'+id+'/asks/';
    // Util.get(url).then((data)=>{
    //     console.log("5,asks",data);
    //     this.setState({
    //         asksarray:data.reply
    //     })
    // })
  }
  onLoadEarlier() {
    this.setState(previousState => {
      return {
        isLoadingEarlier: true
      };
    });
  }

  onSend() {
    const { key, id, messages } = this.state;
    console.log("messages", messages);
    messages[0].user.name = "develop";
    messages[0].user.avatar = "static/user.png";
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });

    let url = "hotels/" + id + "/facility/";
    let param1 = {
      name: messages[0].text
    };
    let param2 = {
      name: messages[0].text
    };
    this.tuntunanswer(messages, url, param1, param2);
  }

  tuntunanswer(messages) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(previousState => {
          return {
            typingText: "豚豚正在输入"
          };
        });
      }
    }
  }

  onReceive(text, idcard, avator) {
    console.log("wqwqwqw", text, idcard);
    let name = idcard === 1 ? "develop" : "tuntun";
    name = idcard === 3 ? "kefu" : name;
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: idcard,
            name: name,
            avatar: avator
          }
        })
      };
    });
  }

  renderCustomActions() {
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flex: 1
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon
            name={"plus-circle"}
            size={px2dp(20)}
            color={"rgb(41,106,252)"}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon name={"camera"} size={px2dp(20)} color={"rgb(41,106,252)"} />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon
            name={"image"}
            size={px2dp(20)}
            color={"rgb(41,106,252)"}
            style={{}}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon
            name={"microphone"}
            size={px2dp(20)}
            color={"rgb(41,106,252)"}
          />
        </View>
        <View style={{ width: 200, background: "red", height: 40 }}>
          <TextInput
            style={{
              height: 40,
              borderColor: "red",
              borderRadius: 10,
              width: 100,
              background: "red"
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={() => this.onSend()}>
            <Icon
              name={"thumbs-up"}
              size={px2dp(20)}
              color={"rgb(41,106,252)"}
              style={{}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderInputToolbar() {
    return this.renderCustomActions();
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#f0f0f0"
          }
        }}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 0
        }}
        textStyle={{
          fontSize: 14
        }}
      />
    );
  }
  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{this.state.typingText}</Text>
        </View>
      );
    }
    return null;
  }
  gotoHuman() {
    this.onReceive("您好，工号2018号客服为您服务。", 3, "static/kf.png");
  }
  renderCustormConentpart() {
    const tip = (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ flexDirection: "row", height: 50 }}>
          <Icon name={"hand-paper"} size={px2dp(30)} color={"yellow"} />
          <Text style={{ flexDirection: "row", height: 50 }}>
            向xiaoxiao min问好
          </Text>
        </View>
      </TouchableOpacity>
    );
    return tip;
  }
  renderCustormHeadpart() {
    return (
      <View style={styles.avatar}>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Avatar
            size={px2dp(100)}
            image={{
              uri:
                "https://timgsa.baidu.com/timg?image&qualit" +
                "y=80&size=b10000_10000&sec=1545814744&di=88720d8768c3be" +
                "ec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
            }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              paddingTop: 10,
              paddingBottom: 10
            }}
          >
            Xiaoming Xiao
          </Text>
          <Text style={{ fontSize: 16, color: "black", paddingBottom: 10 }}>
            单独使用Messenger，没有Facebook账户
          </Text>
          <Text style={{ fontSize: 16, color: "#ccc", paddingBottom: 10 }}>
            所在地：仁川广城市
          </Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          // loadEarlier={this.state.loadEarlier}
          // onLoadEarlier={this.onLoadEarlier}
          // isLoadingEarlier={this.state.isLoadingEarlier}
          showAvatarForEveryMessage
          showUserAvatar
          renderAvatarOnTop
          // keyboardShouldPersistTaps={"always"}
          user={{
            _id: 1 // sent messages should have same user._id
          }}
          // alignTop={true}
          renderChatFooter={this.renderCustormConentpart}
          renderCustormHeadpart={this.renderCustormHeadpart}
          // renderInputToolbar={this.renderInputToolbar}
          // renderActions={this.renderCustomActions}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          // renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0
  },
  avatar: {
    height: "50%",
    // minHeight:400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  chatHead: {
    padding: 10,
    backgroundColor: "white"
  },
  footerText: {
    fontSize: 14,
    color: "#aaa"
  },
  text: {
    paddingLeft: 10,
    fontSize: 14,
    textAlign: "left",
    justifyContent: "center"
  }
});
