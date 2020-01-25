import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView
} from "react-native";
import colors from "../styles/colors";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import RoundedButton from "../components/buttons/RoundedButton";

const backgrounds = [
  {
    description: "「サウナしりとり」へようこそ。",
    detail:
      "「サウナしりとり」とは「しりとり」にサウナの要素を加えた、誰でも簡単に遊べるコミュニティボードゲーム です。",
    img: require("../img/tutrial1.png")
  },
  {
    description:
      "それでは、始めましょう。参加者は話になった状態で座ってください。",
    detail: "",
    img: require("../img/tutrial2.png")
  },
  {
    description:
      "準備が整ったら一人ずつ、自己紹介と最近アツいと思ったことを話し合ってください。",
    detail:
      "通常、サウナに入る前には服を脱いで体を洗いますよね。このゲームでも、まずは「自己紹介」をして自分をさらけ出しましょう。",
    img: require("../img/tutrial3.png")
  }
];

export default class Horizontalscreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectIndex: 0
    };
  }
  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffSet = event.nativeEvent.contentOffset.x;
    const selectIndex = Math.floor(contentOffSet / viewSize);
    this.setState({ selectIndex: selectIndex });
  };

  render() {
    let screenWidth = Dimensions.get("window").width;

    return (
      <LinearGradient
        colors={["#EBB4B4", "#E98989"]}
        style={globalStyles.wrapper}
      >
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
        >
          {backgrounds.map((item, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                width: screenWidth,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 36
              }}
            >
              <Image
                style={{ height: 215, width: 302 }}
                source={item.img}
                resizeMode="contain"
              />
              <View style={styles.tutrailWrapper}>
                <Text style={styles.tutrialText}>{item.description}</Text>
                <Text style={styles.tutrialInterpolate}>{item.detail}</Text>

                
                <RoundedButton
                  text={"はじめる"}
                  textColor={colors.pink01}
                  background={colors.white}
                  opacity={index == 2 ? 1 : 0}
                  handleButton={() =>
                    this.props.navigation.navigate("PlayerSelect")
                  }
                  marginBottom={30}
                />
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {backgrounds.map((item, i) => (
            <View
              key={i}
              style={[
                styles.whiteCircle,
                { opacity: i === this.state.selectIndex ? 1 : 0.1 }
              ]}
            />
          ))}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  circleDiv: {
    position: "absolute",
    bottom: 50,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
    opacity: 1
  },
  tutrialText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    marginBottom: 20,
    letterSpacing: 1.2,
    lineHeight: 18
  },
  tutrialInterpolate: {
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    letterSpacing: 1.2,
    lineHeight: 18,
    marginBottom: 50
  },
  tutrailWrapper: {
    marginTop: 80
  }
});
