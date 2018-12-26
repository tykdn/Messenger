import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import data from "./data/config";
import config from "../../config";
import {
  GiftedChat,
  Bubble,
  SystemMessage
} from "../../component/chat/GiftedChat";
const ip = config.url;

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      asksarray: [],
      surroundings: [],
      focuss: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      isOpen: false,
      checked: false,
      keyword: "",
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
    this.renderModal = this.renderModal.bind(this);
    this.gotoHuman = this.gotoHuman.bind(this);
    this.getFocusList = this.getFocusList.bind(this);
    this.renderFocusModal = this.renderFocusModal.bind(this);
    this._isAlright = null;
  }

  componentWillMount() {
    const { key } = this.state;
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: [data["chatHead"]["facility"]["fw"]]
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
  getFocusList() {
    let url = config.url + "favorites/detail";
    // Util.get(url).then((data)=>{
    //     console.log("focus list",data);
    //     this.setState({
    //         focuss:data.reply
    //     })
    // });
  }
  getFocusanswer() {
    const { key, id } = this.state;
    let url1 = config.url + "favorites/result";
    let param = {
      hotel: id
    };
    // Util.get(url1,param).then((data1)=>{
    //     console.log("focus anse111111r",data1,data1["reply"].length);
    //     this.setState(() => {
    //         return {
    //             messages: [data["chatHead"][key]['fw']],
    //         };
    //     },()=>{
    //         for(let i =0;i<data1["reply"].length;i++){
    //             console.log("this.onReceive(\"订阅的问题是：\"+data1[\"reply\"][i].key,2);",i);
    //             this.onReceive("订阅的问题是："+data1["reply"][i].key,2);
    //             for(let n =0;n<data1["reply"][i].value.length;n++){
    //                 if(typeof data1["reply"][i].value[n]==="string"){
    //                     this.onReceive(data1["reply"][i].value[n],2);
    //                 }else if(typeof data1["reply"][i].value[n]==="object"){
    //                     let tem = [];
    //                     data1["reply"][i].value[n].map((item,index)=>tem.push(<Text key={index}>
    //                         {'\r\n'}{index+1+'.'+item}
    //                     </Text>));
    //                     this.onReceive(tem,2);
    //                 }
    //             }
    //         }
    //     });
    // })
  }
  componentDidMount() {
    const { key, id } = this.state;
    // if(key==='arround'){
    //     let url = config.url+'hotels/'+id+'/surroundings/';
    //     Util.get(url).then((data)=>{
    //         console.log("surroundings",data);
    //        this.setState({
    //            surroundings:data.reply
    //        })
    //     })
    // }
    if (key === "focus") {
      this.getFocusList();
      this.getFocusanswer();
    }
    // if(key==="question"){
    //     let url = config.url+'hotels/'+id+'/asks/';
    //     Util.get(url).then((data)=>{
    //         console.log("5,asks",data);
    //         this.setState({
    //             asksarray:data.reply
    //         })
    //     })
    // }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  fetchData(type, url, param1, param2) {
    const { id } = this.state;
    let url2 = config.url + "hotels/" + id + "/asks/";
    // return {
    //     messagepart: Util.get(url,param1).then((data)=>{
    //         console.log("messagepart",data);
    //         return data
    //     }),
    //     askspart: Util.get(url2,param2).then((data)=>{
    //      console.log("askspart",data);
    //      return data
    //  }),
    // }
  }
  onLoadEarlier() {
    this.setState(previousState => {
      return {
        isLoadingEarlier: true
      };
    });

    // setTimeout(() => {
    //     if (this._isMounted === true) {
    //         this.setState((previousState) => {
    //             return {
    //                 messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
    //                 loadEarlier: false,
    //                 isLoadingEarlier: false,
    //             };
    //         });
    //     }
    // }, 1000); // simulating network
  }

  onSend(messages = []) {
    const { key, id } = this.state;
    console.log("messages", messages);
    messages[0].user.name = "develop";
    messages[0].user.avatar = ip + "static/user.png";
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      };
    });
    // if(key==="question"){
    //     let url = config.url+'hotels/'+id+'/asks/answer/';
    //     let param2 ={
    //         name:messages[0].text
    //     };
    //     Util.get(url,param2).then((data)=>{
    //         for(let i =0;i<data["reply"].length;i++){
    //             if(typeof data["reply"][i]==="string"){
    //                 this.onReceive(data["reply"][i],2);
    //             }else if(typeof data["reply"][i]==="object"){
    //                 let tem = [];
    //                 data["reply"][i].map((item,index)=>tem.push(<Text key={index}>
    //                     {'\r\n'}{index+1+'.'+item}
    //                 </Text>));
    //                 this.onReceive(tem,2);
    //             }
    //         }
    //     })
    // }
    if (key === "facility") {
      let url = config.url + "hotels/" + id + "/facility/";
      let param1 = {
        name: messages[0].text
      };
      let param2 = {
        name: messages[0].text
      };
      this.tuntunanswer(messages, url, param1, param2);
    }
  }

  tuntunanswer(messages, url, param1, param2) {
    if (messages.length > 0) {
      if (messages[0].image || messages[0].location || !this._isAlright) {
        this.setState(previousState => {
          return {
            typingText: "豚豚正在输入"
          };
        });
      }
    }
    // let askanswer = this.fetchData('',url,param1,param2);
    //
    // askanswer.messagepart.then(data=>{
    //     for(let i =0;i<data["reply"].length;i++){
    //         if(typeof data["reply"][i]==="string"){
    //             this.onReceive(data["reply"][i],2);
    //         }else if(typeof data["reply"][i]==="object"){
    //             let tem = [];
    //             data["reply"][i].map((item,index)=>tem.push(<Text key={index}>
    //                 {'\r\n'}{index+1+'.'+item}
    //             </Text>));
    //             console.log(tem);
    //             this.onReceive(tem,2);
    //         }
    //     }
    //     this.setState((previousState) => {
    //         return {
    //             typingText: null
    //         };
    //     });
    // });
    // askanswer.askspart.then(data=>{
    //     this.setState({
    //         asksarray:data.reply
    //     },()=>{
    //         if(this.state.asksarray.length>0){
    //             this.onReceive("以下是问大家中提到最多的问题，请参考",2)
    //         }
    //     })
    //  });
  }

  onReceive(text, idcard, avator = ip + "static/robot.png") {
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
    const { key } = this.state;
    const action =
      key === "facility" ? (
        <View
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 14 }}>请输入设施或服务名称</Text>
        </View>
      ) : null;
    return action;
  }
  //周边
  renderArroud() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
      >
        <Button onPress={() => this.setState({ isOpen: true })} title="周边" />
      </View>
    );
  }

  //政策
  renderPolicy() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
      >
        <Button onPress={() => this.setState({ isOpen: true })} title="政策" />
      </View>
    );
  }

  //我的关注
  renderMine() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
      >
        <Button
          onPress={() => this.setState({ isOpen: true })}
          title="修改订阅的问题"
        />
      </View>
    );
  }
  renderInputToolbar() {
    const { key } = this.state;
    const footer =
      key === "arround"
        ? this.renderArroud()
        : null || key === "policy"
        ? this.renderPolicy()
        : null || key === "focus"
        ? this.renderMine()
        : null;
    return footer;
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
    this.onReceive("您好，工号2018号客服为您服务。", 3, ip + "static/kf.png");
  }
  renderCustormConentpart() {
    const { key, asksarray } = this.state;
    const tip = (
      <Text style={{ paddingLeft: 10 }}>
        如果还有问题，欢迎点击
        <Text onPress={() => this.gotoHuman()} style={{ color: "#6DB8E5" }}>
          {" "}
          "人工服务"
        </Text>
        ，与我们的客服小哥哥小姐姐聊一下喔。
      </Text>
    );

    return null;
  }
  renderCustormHeadpart() {
    const { key } = this.state;
    return (
      <View style={styles.chatHead}>
        <Text style={styles.textTile}>{data.chatHead[key].title}</Text>
        <Text style={styles.textContainer}>{data.chatHead[key].content}</Text>
      </View>
    );
  }
  clickFilter(keyword, url) {
    let message = [
      {
        text: keyword
      }
    ];
    let param2 = {
      name: keyword
    };
    this.tuntunanswer(message, url, null, param2);
    this.setState(
      {
        isOpen: false
      },
      () => this.onReceive(keyword, 1, ip + "static/user.png")
    );
  }
  renderModal() {
    return null;
  }
  myfocus(name, value) {
    let url = config.url + "favorites/add/";
    let param = {
      value,
      name
    };
    // console.log(param);
    // Util.post(url,param).then((data)=>{
    //     console.log(param,data);
    //     this.getFocusList();
    //     this.getFocusanswer();
    // });
  }
  _renderItem = ({ item }) => (
    <View>
      <Text style={{ padding: 10 }}>{item.name}</Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        {item["list"].map((i, ind) => (
          <CheckBox
            center
            textStyle={{ fontSize: 14 }}
            containerStyle={{ height: 30, justifyContent: "center" }}
            key={ind}
            iconType="material"
            checkedIcon="done"
            uncheckedIcon="add"
            checkedColor="red"
            title={i.key}
            onPress={this.myfocus.bind(this, item.name, i.key)}
            checked={i.value}
          />
        ))}
      </View>
    </View>
  );

  renderFocusModal() {
    const { focuss } = this.state;
    return <FlatList data={focuss} renderItem={this._renderItem} />;
  }
  render() {
    const { key } = this.state;
    const footerbarheight = key === "facility" || key === "question" ? 44 : 36;
    return (
      <View style={{ flex: 1 }}>
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
          minInputToolbarHeight={footerbarheight}
          user={{
            _id: 1 // sent messages should have same user._id
          }}
          renderChatFooter={this.renderCustormConentpart}
          renderCustormHeadpart={this.renderCustormHeadpart}
          renderInputToolbar={
            this.renderInputToolbar() ? this.renderInputToolbar : null
          }
          renderActions={this.renderCustomActions}
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
  chatHead: {
    padding: 10,
    backgroundColor: "white"
  },
  textContainer: {
    fontSize: 14,
    color: "black"
  },
  textTile: {
    fontSize: 16,
    fontWeight: "bold"
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
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal1: {
    height: "100%"
  },
  modal3: {
    height: 400
  },
  modal4: {
    height: 200
  }
});
