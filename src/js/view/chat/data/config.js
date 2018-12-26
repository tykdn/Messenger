import * as Animatable from "react-native-animatable";
import { Image, View } from "react-native";
import config from "../../../config";
import React from "react";
const ip = config.url;
module.exports = {
  chatHead: {
    facility: {
      title: "设施服务搜索",
      content:
        "想了解酒店的设施与服务,请输入设施或者服务名称搜索。例如wifi、儿童乐园、书桌、酒吧、接机等。",
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: "请输入设施或服务名称。",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "tuntun",
          avatar: ip + "static/robot.png"
        },
        sent: true,
        received: true
      }
    },
    arround: {
      title: "周边搜索",
      content: "想了解酒店的周边信息，请根据提示选择。",
      checkbox: ["百货商场", "购物中心", "火车站", "景点"],
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: "请点击下方感兴趣的目的地了解详情。",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "tuntun",
          avatar: ip + "static/robot.png"
        },
        sent: true,
        received: true
      }
    },
    policy: {
      title: "政策搜索",
      content: "想了解酒店的政策信息，请根据提示选择。",
      checkbox: ["入住通知", "银行卡", "入住与离店时间", "加床"],
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: "请点击下方政策了解详情。",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "tuntun",
          avatar: ip + "static/robot.png"
        },
        sent: true,
        received: true
      }
    },
    question: {
      title: "提问",
      content: "想咨询酒店相关问题，请在下方提问。",
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: "以下是问大家中其他客人最关心的问答，请参考",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "tuntun",
          avatar: ip + "static/robot.png"
        },
        sent: true,
        received: true
      }
    },
    focus: {
      title: "我的关注",
      content: "想快速了解酒店信息，请点击下方的新增关注信息。",
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: "以下是您关注的信息，正在为您快速查询，请稍等。",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "tuntun",
          avatar: ip + "static/robot.png"
        },
        sent: true,
        received: true
      }
    }
  },
  config: [
    {
      key: "facility",
      title: "设施服务",
      checkbox: [
        "儿童乐园",
        "床",
        "书桌",
        "阳台",
        "wifi",
        "酒吧",
        "早餐",
        "接机"
      ]
    },
    {
      key: "arround",
      title: "周边",
      checkbox: ["百货商场", "购物中心", "火车站", "景点"]
    },
    {
      key: "policy",
      title: "政策",
      checkbox: ["入住通知", "银行卡", "入住与离店时间", "加床"]
    },
    {
      key: "others",
      title: "其他",
      checkbox: ["天气", "加个变动", "隔音效果", "房间大小"]
    }
  ],
  card: [
    {
      url: "../images/1.png",
      key: "facility",
      name: "设施服务搜索",
      animate: "bounceIn",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle:
        "想了解酒店的设施与服务,请输入设施或者服务名称搜索。例如wifi、儿童乐园、书桌、酒吧、接机等。"
    },
    {
      url: "../images/2.png",
      key: "arround",
      name: "周边搜索",
      animate: "bounceInDown",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "想了解酒店的周边信息，请根据提示选择。"
    },
    {
      url: "../images/3.png",
      key: "policy",
      name: "政策搜索",
      animate: "bounceInUp",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "想了解酒店的政策信息，请根据提示选择。"
    },
    {
      url: "../images/4.png",
      key: "question",
      name: "提问",
      animate: "bounceInLeft",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "想咨询酒店相关问题，请在下方提问。"
    },
    {
      url: "../images/5.png",
      key: "focus",
      name: "我的关注",
      animate: "bounceInRight",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "想快速了解酒店信息，请点击下方的新增关注信息。"
    }
  ],
  policy: [
    {
      title: "宠物",
      key: "pet_policies"
    },
    {
      title: "加床",
      key: "bed_policies"
    },
    {
      title: "儿童",
      key: "children_policies"
    },
    {
      title: "入住时间和离店时间",
      key: "arrival_policies"
    },
    {
      title: "银行卡",
      key: "credit_card_policies"
    },
    {
      title: "入住信息",
      key: "notice_policies"
    }
  ]
};
