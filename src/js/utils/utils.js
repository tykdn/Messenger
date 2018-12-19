// obtained from react native tutorials

import React from "react";
import { PixelRatio } from "react-native";
import Dimensions from "Dimensions";

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  post(url, data) {
    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    return fetch(url, fetchOptions)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        alert(error);
      });
  },
  get(url, params) {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key =>
        paramsArray.push(key + "=" + params[key])
      );
      if (url.search(/\?/) === -1) {
        url += "?" + paramsArray.join("&");
      } else {
        url += "&" + paramsArray.join("&");
      }
    }
    //fetch请求
    return fetch(url, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        alert(error);
      });
  }
};
export default Util;
