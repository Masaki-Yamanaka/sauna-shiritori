import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Modal, Dimensions } from "react-native";
import colors from "../../styles/colors";
import RoundedButton from "../buttons/RoundedButton";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../styles/global";

const { width, height } = Dimensions.get("screen");

export default class PlayModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.basic = this.basic.bind(this);
    this.important = this.important.bind(this);

  }
  closeModal() {
    this.props.closeModalScreen();
  }
  basic() {
    this.props.basicRuleTransition();
  }

  important() {
    this.props.importantTransition();
  }

  render() {
    const { modalVisible } = this.props;
    return (
      <Modal visible={modalVisible} transparent={true} animationType={"slide"}>
        <LinearGradient
          colors={["#EBB4B4", "#E98989"]}
          style={globalStyles.wrapper}
        >
          <View style={globalStyles.container}>

            <View style={styles.listWrapper}>
                 <RoundedButton
                text={"大事なこと"}
                textColor={colors.white}
                handleButton={this.important}
                marginBottom={50}
              />
              <RoundedButton
                text={"サウナしりとりとは"}
                textColor={colors.white}
                handleButton={this.story}
                marginBottom={50}
              />
              <RoundedButton
                text={"基本的な遊び方"}
                textColor={colors.white}
                handleButton={this.basic}
                marginBottom={50}
              />
              <RoundedButton
                text={"サウナーの極意"}
                textColor={colors.white}
                handleButton={this.cardCategory}
                marginBottom={50}
              />
              <RoundedButton
                text={"カードの種類"}
                textColor={colors.white}
                handleButton={this.option}
                marginBottom={50}
              />
              <RoundedButton
                text={"戻る"}
                textColor={colors.pink01}
                background={colors.white}
                handleButton={this.closeModal}
                marginBottom={50}
              />
            </View>
          </View>
        </LinearGradient>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
