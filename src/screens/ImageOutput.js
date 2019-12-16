import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

var warm;
var cold;
var cardNum;
var result = [];

export default class imageOutput extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      count: 0,
      cards: {
        1: require("../img/warm.jpg"),
        2: require("../img/cold.jpg")
      }
    };
  }

  handlePress() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
    if (this.state.count >= result.length) {
      alert("ととのった〜！");
    }
    cardNum = result[this.state.count];
  }

  createCardOrder() {

    const { hotNum, coldNum } = this.props.navigation.state.params;
    
    const warm = hotNum;
    const cold = coldNum;

    var warmArray = [];
    var coldArray = [];

    for (var i = 0; i < warm; i++) {
      warmArray.push(1);
    }
    for (var i = 0; i < cold; i++) {
      coldArray.push(2);
    }
    result = warmArray.concat(coldArray);

    for (var i = result.length - 1; i >= 0; i--) {
      // 0~iのランダムな数値を取得
      var rand = Math.floor(Math.random() * (i + 1));
      // 配列の数値を入れ替える
      [result[i], result[rand]] = [result[rand], result[i]];
    }
    return result;
  }

  componentDidMount() {
    this.createCardOrder(warm, cold);
  }

  render() {
    const { cards } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={cards[cardNum]} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
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
