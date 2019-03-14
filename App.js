import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/js/redux";
import Root from "./src/js/view";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
