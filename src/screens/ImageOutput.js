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

const cardArray = [];
const resultArray = [];

export default class imageOutput extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
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
    this.setState(prev => {
      return {
        deg: prev.deg + 360
      };
    });

    Animated.timing(this.state.animation, {
      toValue: this.state.deg,
      duration: 1500
    }).start(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    });
  }

  handlePress() {
    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
    // if (this.state.count >= result.length) {
    //   alert("ととのった〜！");
    //   this.props.navigation.navigate("home");
    // }
    // cardNum = result[this.state.count];
  }

  componentDidMount() {
    const { hotNum, coldNum, hardhot, spark } = this.props;
    const cardArray = [hotNum, coldNum, hardhot, spark]; //親コンポーネントから値を取得し、配列に格納
    const resultArray = [];
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
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Animated.View style={animatedStyles}>
            <Image source={resultArray[1]} style={styles.image} />
          </Animated.View>
          <TouchableOpacity style={styles.button} onPress={this.startAnimation}>
            <Text style={styles.text}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 300,
    height: 300,
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
