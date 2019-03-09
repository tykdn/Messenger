import { Dimensions, Platform } from "react-native";
import px2dp from "../utils/px2dp";
const globalTextColor = "#000";

export default {
  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
  themeColor: "rgb(0,0,0)",
  grayColor: "#c4c4c4",
  pageBackgroundColor: "white",
  headerBackgroundColor: "rgb(255,255,255)",
  footerIconColor: "rgba(147,148,162,1)",
  footerIconSelectColor: "rgba(0,0,0,1)",

  headerTextColor: "rgb(160, 160, 160)",
  searchColor: "rgb(235,235,235)",

  titleColor: "#000",
  secondTitleColor: "rgb(144,144,144)",
  btnActiveOpacity: 0.7,
  actionBar: {
    height: Platform.OS === "android" ? px2dp(49) : px2dp(69),
    backgroundColor: "rgb(22,131,251)",
    fontSize: px2dp(16),
    fontColor: "white"
  },
  text: {
    color: globalTextColor,
    fontSize: px2dp(15)
  },
  scrollView: {
    fontSize: px2dp(15),
    underlineStyle: {
      height: 2,
      backgroundColor: "rgb(108,140,194)"
    }
  }
};
