import React, { Component } from "react";
import colors from "../styles/colors";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import NumButton from "./buttons/NumButton";

export default class InputNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotCard: require("../img/hot.png"),
      coldCard: require("../img/cold.png"),
      hardHotCard: require("../img/hardhot.png"),
      sparkCard: require("../img/spark.png")
    };
  }

  render() {
    const { cardType, cardNum, cardName } = this.props;

    const card = cardType;
    const imgSorce =
      card == "hotCard"
        ? this.state.hotCard
        : card == "coldCard"
        ? this.state.coldCard
        : card == "sparkCard"
        ? this.state.sparkCard
        : card == "hardHotCard"
        ? this.state.hardHotCard
        : null;

    return (
      <View style={styles.cardSelectBox}>
        <View style={styles.cardSelectImageBox}>
          <Image style={styles.cardSelectImage} source={imgSorce}></Image>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.rightTitleContainer}>
            <Text style={styles.rightTitle}>{cardName}</Text>
          </View>

          <View style={styles.rightNumContainer}>
            <Text style={styles.rightNumText}>{cardNum}</Text>
          </View>

          <View style={styles.rightButtonContainer}>
            <NumButton
              text={"-"}
              textColor={colors.white}
              textSize={15}
              background={colors.pink01}
              borderColor={colors.white}
              width={30}
              height={30}
              Adjustment={this.props.subtractHandler}
            />
            <NumButton
              text={"+"}
              textColor={colors.white}
              textSize={15}
              background={colors.pink01}
              borderColor={colors.white}
              width={30}
              height={30}
              Adjustment={this.props.addHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cardSelectBox: {
    flexDirection: "row",
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 35,
    borderWidth: 1,
    borderColor: "#E98989",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  cardSelectImageBox: {
    flex: 1,
    justifyContent: "center"
  },
  cardSelectImage: {
    width: 117,
    height: 162
  },
  rightContainer: {
    flex: 1
  },
  rightTitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  rightTitleContainer: {
    borderColor: colors.white,
    borderBottomWidth: 1,
    paddingVertical: 12,
    marginLeft: 15
  },
  rightNumContainer: {
    marginVertical: 16
  },
  rightNumText: {
    textAlign: "center",
    fontSize: 42,
    color: colors.white
  },
  rightButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
