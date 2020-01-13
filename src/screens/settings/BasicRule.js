import React, { Component } from "react";
import colors from "../../styles/colors";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../styles/global";
import SettingContainer from "../../components/SettingContainer";
import RoundedButton from "../../components/buttons/RoundedButton";

const { width, height } = Dimensions.get("screen");

export default class BasicRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpContent: [
        "ちょっとヒントをだす場つなぎの小話をするなりして、みんなが心地良くゲームを進められるようにしましょう！"
      ],
      detailContent: [
        "しりとりでは「ん」を言ったら負けなのですが、参加者同士でギスギスしたくないもの。",
        "もう一度言い直しのチャンスをあげたり、一個前の文字で次のしりとりをするなり柔軟にすすめましょう。"
      ],
      definitionContent: [
        "温度で表される数字的な比較はもちろん。情熱などのパッション的な比較でももちろんOKです。",
        "むしろ人の情熱的な部分が一番アツイところ！",
        "厳密な数字比較に陥らずに、みんなのパッションを言葉にのせると楽しいですよ！"
      ]
    };
  }
  render() {
    return (
      <ScrollView>
        <LinearGradient
          colors={["#EBB4B4", "#E98989"]}
          style={globalStyles.wrapper}
        >
          <View style={globalStyles.container}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                他のメンバーがうまくワードを出せないとき
              </Text>
            </View>
            <SettingContainer
              content={this.state.helpContent}
              bottomSpace={45}
            />
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                他のメンバーがうまくワードを出せないとき
              </Text>
            </View>
            <SettingContainer
              content={this.state.detailContent}
              bottomSpace={45}
            />
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>「アツイ」「冷たい」などの定義</Text>
            </View>
            <SettingContainer
              content={this.state.detailContent}
              bottomSpace={45}
            />

            <RoundedButton
              text={"戻る"}
              textColor={colors.pink01}
              background={colors.white}
              marginBottom={height * 0.1}
              handleButton={() => this.props.navigation.navigate("Home")}
            />
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 30
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
