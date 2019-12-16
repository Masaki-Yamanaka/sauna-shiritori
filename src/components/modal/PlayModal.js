import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Modal } from "react-native";
import colors from "../../styles/colors";
import RoundedButton from "../buttons/RoundedButton";

export default class PlayModal extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.story = this.story.bind(this);
    this.basicRule = this.basicRule.bind(this);
    this.cardCategory = this.cardCategory.bind(this);
    this.option = this.option.bind(this);
  }
  closeModal() {
    this.props.closeModalScreen();
  }
  story() {
    this.props.storyTransition();
  }
  basicRule() {
    this.props.basicRuleTransition();
  }
  cardCategory() {
    this.props.cardCategoryTransition();
  }
  option() {
    this.props.optionSettingTransition();
  }

  render() {
    const { modalVisible } = this.props;
    return (
      <Modal visible={modalVisible} transparent={true} animationType={"slide"}>
        <View style={styles.wrapper}>
          <View style={styles.listWrapper}>
            <RoundedButton
              text={"ストーリー"}
              textColor={colors.white}
              handleButton={this.story}
            />
            <RoundedButton
              text={"基本ルール"}
              textColor={colors.white}
              handleButton={this.basicRule}
            />
            <RoundedButton
              text={"カードの種類"}
              textColor={colors.white}
              handleButton={this.cardCategory}
            />
            <RoundedButton
              text={"オプション設定"}
              textColor={colors.white}
              handleButton={this.option}
            />
            <RoundedButton
              text={"戻り"}
              textColor={colors.pink01}
              background={colors.white}
              handleButton={this.closeModal}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 30
  }
});
