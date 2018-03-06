/**
 * React Native Redux Example
 * https://github.com/aaronvb/react-native-redux-example
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { AppRegistry, StyleSheet, View, StatusBar } from "react-native";

import itemApp from "./reducers";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

// Create store with logger.
// Use Cmd + D to open developer menu to start debugger
const store = createStore(itemApp, applyMiddleware(logger));

class ReduxExample extends Component {
  componentDidMount() {
    // Set status bar text to white
    StatusBar.setHidden(false);
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <ItemList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ReduxExample;

AppRegistry.registerComponent("ReduxExample", () => ReduxExample);
