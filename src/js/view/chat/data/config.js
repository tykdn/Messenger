import React from "react";

module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: "请输入设施或服务名称。",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "tuntun",
      avatar: "static/robot.png"
    },
    sent: true,
    received: true
  }
];
