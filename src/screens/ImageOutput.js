import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions
} from "react-native";
import colors from "../styles/colors";
import ClapButton from "../components/buttons/ClapButton";
import RoundedButton from "../components/buttons/RoundedButton";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../styles/global";


const { width, height } = Dimensions.get("screen");
const resultArray = [];
var Num = 0;

export default class imageOutput extends Component {
  constructor(props) {
    super(props);
    this.startAnimation = this.startAnimation.bind(this);

    this.state = {
      count: 0,
      cardNum: 0,
      cards: {
        0: require("../img/start.png"),
        1: require("../img/hot.png"),
        2: require("../img/cold.png"),
        3: require("../img/hardhot.png"),
        4: require("../img/spark.png")
      },
      animation: new Animated.Value(0),
      deg: 360
    };
  }

  startAnimation() {
    setTimeout(() => {
      this.setState(prev => {
        return {
          deg: prev.deg + 360,
          count: prev.count + 1
        };
      });
    }, 3500);

    Animated.timing(this.state.animation, {
      toValue: this.state.deg,
      duration: 4000
    }).start();
    Num = resultArray[this.state.count];
  }

  componentDidMount() {
    const hotNum = this.props.navigation.getParam("hotNum");
    const coldNum = this.props.navigation.getParam("coldNum");
    const hardhot = this.props.navigation.getParam("hardhot");
    const spark = this.props.navigation.getParam("spark");

    const cardArray = [hotNum, coldNum, hardhot, spark]; //親コンポーネントから値を取得し、配列に格納
    for (var j = 0; j < cardArray.length; j++) {
      //stateと関連付け
      for (var i = 0; i < cardArray[j]; i++) {
        resultArray.push(j + 1);
      }
    }
    for (var s = resultArray.length - 1; s >= 0; s--) {
      //シャッフル
      // 0~sのランダムな数値を取得
      var rand = Math.floor(Math.random() * (s + 1));
      // 配列の数値を入れ替える
      [resultArray[s], resultArray[rand]] = [resultArray[rand], resultArray[s]];
    }
    return resultArray;
  }

  render() {
    const { cards, count } = this.state;
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "3600deg"]
    });

    const animatedStyles = {
      transform: [{ rotateY: rotateInterpolate }]
    };

    return (
      <LinearGradient
        colors={["#EBB4B4", "#E98989"]}
        style={globalStyles.wrapper}
      >
        <View style={globalStyles.container}>
          <View style={styles.imageOutput}>
            <Animated.View style={animatedStyles}>
              <Image source={cards[Num]} style={styles.image} />
            </Animated.View>
            <RoundedButton
              text={"カードを引く"}
              textColor={colors.pink01}
              background={colors.white}
              handleButton={this.startAnimation}
            />
          </View>
        </View>
        <View>
          <ClapButton />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01
  },
  imageOutput: {
    flex: 1,
    alignItems: "center",
    paddingTop: height*0.1
  },
  image: {
    width: width - 72,
    height: (width - 72) * 1.39,
    marginBottom: 40
  },
  button: {
    backgroundColor: colors.white,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.pink01
  }
});
