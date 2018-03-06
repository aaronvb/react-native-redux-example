import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);

    // Bind functions below
    this.handleCreateItem = this.handleCreateItem.bind(this);
    this.randomizeItemData = this.randomizeItemData.bind(this);
  }

  handleCreateItem() {
    // Randomize item data
    const randomizedItemData = this.randomizeItemData();

    this.props.dispatch({ type: "ADD_ITEM", ...randomizedItemData });
  }

  randomizeItemData() {
    // Generate random color from array
    const colorArr = ["#2892b4", "#b44a28", "#28B490"];
    const randColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    // Generate random number below 1000
    const randNum = Math.floor(Math.random() * 1000 + 1);
    const randName = "Item " + randNum;

    return { name: randName, bgColor: randColor };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left} />
          <View style={styles.middle}>
            <TouchableOpacity onPress={() => this.handleCreateItem()}>
              <Text style={styles.textRight}>ADD ITEM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right} />
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#181e29"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textRight: {
    color: "#efefef",
    fontWeight: "bold"
  }
});

export default connect()(Header);
