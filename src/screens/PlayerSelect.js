import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";
import colors from "../styles/colors";
import NumButton from "../components/buttons/NumButton";
import RoundedButton from "../components/buttons/RoundedButton";

export default class imageOutput extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Text style={styles.headingTitle}>プレイヤー登録</Text>
        </View>

        <View style={styles.descWrapper}>
          <Text style={[styles.descText, { paddingBottom: 15 }]}>
            プレイヤーは輪になってしりとりの準備をして下さい。
          </Text>
          <Text style={styles.descText}>
            プレイヤーの人数を選択できたら、「人数確定」ボタンを押してください。
          </Text>
        </View>

        <View style={styles.mainWrapper}>
          <View style={styles.mainContainer}>
            <Text style={styles.mainTitle}>人数選択</Text>
          </View>
        </View>
        <Text style={styles.mainNum}>4</Text>
        <View style={styles.NumWrapper}>
          <NumButton
            text={"-"}
            textColor={colors.white}
            background={colors.pink01}
            borderColor={colors.white}
            Size={40}
          />
          <NumButton
            text={"+"}
            textColor={colors.white}
            background={colors.pink01}
            borderColor={colors.white}
          />
        </View>
        <RoundedButton
          text={"人数確定"}
          textColor={colors.pink01}
          background={colors.white}
          style={styles.startButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    paddingTop: 100,
    paddingRight: 20,
    paddingLeft: 20
  },
  heading: {
    paddingBottom: 30
  },
  headingTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white
  },
  descWrapper: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 60
  },
  descText: {
    color: colors.pink01,
    fontSize: 17,
    lineHeight: 25
  },
  mainWrapper: {
    padding: 40
  },
  mainContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingBottom: 15
  },
  mainTitle: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white
  },
  mainNum: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white
  },
  NumWrapper: {
    justifyContent: "space-around",
      flexDirection: "row",
    paddingBottom: 60
  }
});
