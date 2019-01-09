import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    Switch,
    ScrollView, TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome";
import TextButton from '../../component/textButton';
import theme from "../../config/theme";
import px2dp from "../../utils/px2dp";
import Icon from "react-native-vector-icons/Ionicons";
import Avatar from "../../component/avatar";

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        { name: "通知", value: false },
        { name: "在线状态", value: false },
        { name: "账号", value: false },
        { name: "手机", value: false },
        { name: "用户", value: false },
        { name: "快拍", value: false },
        { name: "私密对话", value: false },
        { name: "流量和存储", value: false },
        { name: "表情选项", value: false },
        { name: "切换账户", value: false },
        { name: "创建新账户", value: false },
        { name: "账号设置", value: false },
        { name: "报告问题", value: false },
        { name: "帮助", value: false },
        { name: "法律与政策", value: false }
      ]
    };
  }
  static navigationOptions  = ({navigation}) =>{
      return {
      title:'我',
      headerLeft:<View style={{paddingLeft:px2dp(16) }}><TextButton onPress={()=>navigation.goBack()} text={'完成'} fontSize={px2dp(15)} color={'rgb(92,133,194)'}/></View>,
      headerStyle: {
          // backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
          flex: 1,
          textAlign: 'center',
          fontWeight: '500',
      },
  }};
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.avatar} >
              <View style={{alignItems: 'center',
                  justifyContent: 'center',marginTop: px2dp(32)}}>
                  <Avatar
                      size={px2dp(80)}
                      image={{
                          uri:
                              "https://timgsa.baidu.com/timg?image&qualit" +
                              "y=80&size=b10000_10000&sec=1545814744&di=88720d8768c3be" +
                              "ec516c92686d5f2270&src=http://images.freeimages.com/images/large-previews/461/dog-1379928.jpg"
                      }}
                  />
                  <Text style={{fontSize: 24,color: 'black'}}>Xiaoming Xiao</Text>
                  <View style={{flexDirection:'row',flex:1}}>
                      <Ionicons
                          name={"exclamation-circle"}
                          size={px2dp(15)}
                          style={{ color: "red",lineHeight:px2dp(32) }}
                      />
                      <View style={{backgroundColor:'rgb(229,229,229)',padding:px2dp(8),height:px2dp(32),marginLeft: 10}}><TextButton fontSize={16} text={'添加头像'} color={'rgb(92,133,194)'}/></View>
                  </View>
              </View>
          </View>
          <View style={{flex:1}}>
            <ScrollView>
              {this.state.dataArray.map((item, i) => {
                return (
                  <Item key={i} id={i} name={item.name} isSwitchOn={item.value} />
                );
              })}
            </ScrollView>
          </View>
      </View>
    );
  }
}

class Item extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isSwitchOn: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: this.props.isSwitchOn
    };
  }

  render() {
    return (
      <View style={styles.item}>
        <Icon name="ios-menu" size={px2dp(25)} color="#ccc" />
        <Text
          style={{
            fontSize: theme.actionBar.fontSize,
            color: "#000",
            marginLeft: px2dp(20)
          }}
        >
          {this.props.name}
        </Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <Switch
            onValueChange={this._onValueChange.bind(this)}
            value={this.state.isSwitchOn}
          />
        </View>
      </View>
    );
  }

  _onValueChange(value) {
    this.setState({
      isSwitchOn: value
    });
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgb(244,244,244)'
    },
    avatar:{
        height: px2dp(200),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(244,244,244)'
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
  }
});
