import React, { Component } from "react";
import colors from "../../styles/colors";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../styles/global";
import SettingContainer from "../../components/SettingContainer";
import RoundedButton from "../../components/buttons/RoundedButton";

export default class Important extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingContent: [
        "サウナは、その場の人たち同士で居心地の良い空間をつくるのが大切です。",
        "そういう意味で、終わったあと、みんなで「いいゲームだった」と思えるのが本当のゴールになります。",
        "ルールには厳密になりすぎず、誰かが言葉に詰まったらフォローした「それアツイよね〜」などと盛りあげたりしながら良いサウナの時間を楽しんでください。"
      ]
    };
  }
  render() {
    return (
      <LinearGradient
        colors={["#EBB4B4", "#E98989"]}
        style={globalStyles.wrapper}
      >
        <View style={globalStyles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>大事なこと</Text>
          </View>
          <SettingContainer
            content={this.state.settingContent}
            bottomSpace={45}
          />
          <RoundedButton
            text={"戻る"}
            textColor={colors.pink01}
            background={colors.white}
            handleButton={() => this.props.navigation.navigate("Home")}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 45
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white
  },

  contentWrapper: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20
  },
  contentText: {
    color: colors.pink01,
    fontSize: 23,
    lineHeight: 35,
    paddingBottom: 20
  }
});
