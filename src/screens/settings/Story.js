import React, { Component } from "react";
import colors from "../../styles/colors";
import { Text, View, StyleSheet } from "react-native";

export default class Story extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text> ストーリー </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    padding: 20
  }
});
