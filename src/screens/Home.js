import React, { Component } from "react";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default class Home extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.props.navigation.navigate("inputnum");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <View style={styles.logo}>
            <Image source={require("../img/header-logo.png")} />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>サウナしりとり</Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <RoundedButton
            text={"はじめる"}
            textColor={colors.pink01}
            background={colors.white}
            style={styles.startButton}
            handleButton={this.handleButton}
          ></RoundedButton>

          <RoundedButton
            text={"遊び方"}
            textColor={colors.white}
          ></RoundedButton>
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
  welcomeWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    alignItems: "center",
    paddingBottom: 50
  },
  title: {
    alignItems: "center"
  },
  titleText: {
    fontSize: 50,
    color: colors.white,
    fontWeight: "600"
  }
});