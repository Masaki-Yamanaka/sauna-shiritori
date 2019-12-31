import React, { Component } from "react";
import colors from "../../styles/colors";
import { Text, View, StyleSheet } from "react-native";

export default class Important extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>大事なこと</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentText}>
            サウナは、その場の人たち同士で居心地の良い空間をつくるのが大切です。
          </Text>
          <Text style={styles.contentText}>
            そういう意味で、終わったあと、みんなで「いいゲームだった」と思えるのが本当のゴールになります。
          </Text>
          <Text style={styles.contentText}>
            ルールには厳密になりすぎず、誰かが言葉に詰まったらフォローした「それアツイよね〜」などと盛りあげたりしながら良いサウナの時間を楽しんでください。
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  titleWrapper: {
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
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
