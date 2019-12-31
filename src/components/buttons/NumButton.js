import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default class NumButton extends Component {
  render() {
    const { text, textColor, background, borderColor, Adjustment, Size } = this.props;
    return (
      <TouchableOpacity onPress={Adjustment}>
        <View
          style={[
            {
              backgroundColor: background,
              borderColor: borderColor
            },
            styles.ButtonWrapper
          ]}
        >
          <Text style={[{ color: textColor }, styles.textStyle]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

NumButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  Adjustment: PropTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ButtonWrapper: {
    width: 35,
    height: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 24
  }
});
