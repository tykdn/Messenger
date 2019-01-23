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
import Icon  from "react-native-vector-icons/FontAwesome";
import theme from "../../config/theme";
import px2dp from "../../utils/px2dp";
import Avatar from "../../component/avatar";
class UselessTextInput extends Component {
    render() {
        return <TextInput {...this.props} editable={true} maxLength={40} />;
    }
}
export default class Call extends Component {
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
                            <Icon
                                name={"users"}
                                size={20}
                                style={{ color: "rgb(67,139,236)" }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>开始通话</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            height: px2dp(30),
                            justifyContent: "center"
                        }}
                    >
                        <Text style={styles.text}>推荐用户</Text>
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
                <View style={{
                    height: px2dp(49),
                    flex:1,
                    flexDirection:'row',
                    // justifyContent:'center',
                    alignItems:'center',
                    borderBottomWidth:1,
                    borderBottomColor:'#ccc'
                }}>
                    <Text
                        style={{
                            fontSize: theme.actionBar.fontSize,
                            color: "#000",
                            marginLeft: px2dp(10),
                        }}
                    >
                        {name}
                    </Text>
                    <Icon
                        name={"phone"}
                        size={20}
                        style={{ color: "rgb(67,139,236)",alignItems:'flex-end' }}
                    />
                    <Icon
                        name={"users"}
                        size={20}
                        style={{ color: "rgb(67,139,236)",alignItems:'flex-end' }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
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
        paddingRight: px2dp(20),
    }
});
