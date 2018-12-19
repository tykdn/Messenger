import { Dimensions } from "react-native";

// device width/height
//const deviceWidthDp = Dimensions.get('window').width;
const deviceW = Dimensions.get("window").width;
// design width/height
const basePx = 375;

export default function px2dp(uiElementPx) {
  //console.log(deviceWidthDp);
  //console.log(deviceHeightDp);
  return (uiElementPx * deviceW) / basePx;
}
