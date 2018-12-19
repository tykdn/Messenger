import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    Switch,
    ScrollView
} from "react-native";
import theme from "../../config/theme";
import px2dp from "../../utils/px2dp";
import Icon from "react-native-vector-icons/Ionicons";

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
                { name: "流量和存储", value: false},
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

    render() {
        return (
            <View>
                <ScrollView>
                    {this.state.dataArray.map((item, i) => {
                        return (
                            <Item
                                key={i}
                                id={i}
                                name={item.name}
                                isSwitchOn={item.value}
                            />
                        );
                    })}
                </ScrollView>
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
    item: {
        flexDirection: "row",
        height: px2dp(49),
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingLeft: px2dp(20),
        paddingRight: px2dp(20),
        borderBottomColor: "#ccc",
        borderBottomWidth: 1 / PixelRatio.get()
    }
});
