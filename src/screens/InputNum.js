import React, { Component } from "react";
import colors from "../styles/colors";
import { StyleSheet, Text, View, TextInput } from "react-native";
import RoundedButton from "../components/buttons/RoundedButton";

export default class InputNum extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      hotNum: 0,
      coldNum: 0
    };
    this.changeHotNum = this.changeHotNum.bind(this);
    this.changeColdNum = this.changeColdNum.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    const { coldNum, hotNum } = this.state;
    this.props.navigation.navigate("imageoutput", {coldNum: coldNum, hotNum: hotNum});
  }

  changeHotNum(num) {
    this.setState({
      hotNum: num
    });
  }

  changeColdNum(num) {
    this.setState({
      coldNum: num
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>カードを選択</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputBox}>
            <View style={styles.inputBoxContainer}>
              <Text style={styles.inputText}>アツイカード</Text>
            </View>
            <TextInput
              style={styles.inputField}
              onChangeText={this.changeHotNum}
            />
          </View>

          <View style={styles.inputBox}>
            <View style={styles.inputBoxContainer}>
              <Text style={styles.inputText}>冷たいカード</Text>
            </View>
            <TextInput
              style={styles.inputField}
              onChangeText={this.changeColdNum}
            />
          </View>
        </View>
        <View style={styles.nextButton}>
          <RoundedButton
            text={"次へ"}
            textColor={colors.pink01}
            background={colors.white}
            handleButton={this.handleButton}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    padding: 20
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.white,
    fontSize: 30
  },
  inputWrapper: {
    flex: 2
  },
  inputBox: {
    flexDirection: "row",
    marginBottom: 60
  },
  inputBoxContainer: {
    flex: 1,
    alignItems: "center"
  },
  inputText: {
    color: colors.white
  },

  inputField: {
    flex: 2,
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    color: colors.white,
    borderBottomColor: colors.white
  },
  nextButton: {
    flex: 1
  }
});
