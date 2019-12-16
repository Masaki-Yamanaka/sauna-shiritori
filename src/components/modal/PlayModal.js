import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Modal,
  Button
} from "react-native";
import colors from "../../styles/colors";

export default class PlayModal extends Component {

  

  render() {
    const { modalVisible, backButton } = this.props;
    return (
      <Modal visible={modalVisible} transparent={true} animationType={"slide"}>
        <View style={styles.wrapper}>
          <View style={styles.listWrapper}>
            <Button title="ストーリー" />
            <Button title="基本ルール" />
            <Button title="カードの種類" />
            <Button title="オプション設定" />
            <Button title="戻る"
        
            />
          </View>
        </View>
      </Modal>
    );
  }
}

PlayModal.propTypes = {
  modalVisible: PropTypes.bool,
  backButton: PropTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: colors.pink01,
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  listWrapper: {
    display: "flex",
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: "-100%" }, { translateX: "-100%" }]
  }
});
