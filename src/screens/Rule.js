import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import NumButton from "../components/buttons/NumButton";
import RoundedButton from "../components/buttons/RoundedButton";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";

export default class imageOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={["#EBB4B4", "#E98989"]}
        style={globalStyles.wrapper}
      >
        <View style={globalStyles.container}>
          <View style={styles.titleWrapper}>
            <Text style={globalStyles.titleText}>ルール説明</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.contentText}>基本は「しりとり」です。</Text>
            <Text style={styles.contentText}>
              プレイヤーは輪になって順番にしりとりをします。
            </Text>
            <Text style={styles.contentText}>
              自分のターンが来たら、「カードを引く」ボタンを押して、カードの内容に沿ってしりとりをします。
            </Text>
            <Text style={styles.contentText}>
              カードが最後まで行ったら、いわゆる「ととのい状態」。みんなで最高の「ととのい状態」を目指して、ゲームを進めましょう！
            </Text>
          </View>
          <RoundedButton
            text={"次へ"}
            textColor={colors.pink01}
            background={colors.white}
            style={styles.startButton}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 19,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 300
  },
  contentText: {
    color: colors.pink01,
    fontSize: 14,
    lineHeight: 18,
    paddingVertical: 10
  }
});
