import React, { Component } from "react";
import colors from "../styles/colors";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import RoundedButton from "../components/buttons/RoundedButton";
import NumButton from "../components/buttons/NumButton";
import CardSelect from "../components/CardSelect";

export default class InputNum extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      hotNum: 3,
      coldNum: 4,
      hardhot: 0,
      spark: 0
    };
  }

  componentDidMount() {
    alert(this.props.navigation.getParam("playerNum"));
  }
  handleCount() {
    alert("aaa");
  }
  render() {
    const { hotNum, coldNum, hardhot, spark } = this.state;

    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>カードを選択</Text>
        </View>
        <View style={styles.inputWrapper}>
          <CardSelect
            cardType={"hotCard"}
            cardName={"アツイカード"}
            cardNum={hotNum}
            addHandler={() => {
              this.setState({ hotNum: this.state.hotNum + 1 });
            }}
            subtractHandler={() => {
              this.setState({ hotNum: this.state.hotNum - 1 });
            }}
          />
          <CardSelect
            cardType={"coldCard"}
            cardName={"冷たいカード"}
            cardNum={coldNum}
            addHandler={() => {
              this.setState({ coldNum: this.state.coldNum + 1 });
            }}
            subtractHandler={() => {
              this.setState({ coldNum: this.state.coldNum - 1 });
            }}
          />
          <CardSelect
            cardType={"sparkCard"}
            cardName={"シビれるカード"}
            cardNum={hardhot}
            addHandler={() => {
              this.setState({ hardhot: this.state.hardhot + 1 });
            }}
            subtractHandler={() => {
              this.setState({ hardhot: this.state.hardhot - 1 });
            }}
          />
          <CardSelect
            cardType={"hardHotCard"}
            cardName={"激アツカード"}
            cardNum={spark}
            addHandler={() => {
              this.setState({ spark: this.state.spark + 1 });
            }}
            subtractHandler={() => {
              this.setState({ spark: this.state.spark - 1 });
            }}
          />
        </View>

        <View style={styles.nextButton}>
          <RoundedButton
            text={"次へ"}
            textColor={colors.pink01}
            background={colors.white}
            handleButton={() => {
              this.props.navigation.navigate("ImageOutput", {
                hotNum: this.state.hotNum,
                coldNum: this.state.coldNum,
                hardhot: this.state.hardhot,
                spark: this.state.spark
              });
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    padding: 20
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold"
  },
  inputWrapper: {
    paddingTop: 30,
    paddingBottom: 60
  },
  inputBox: {
    flexDirection: "row",
    marginBottom: 60
  },
  inputBoxContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  leftImageBox: {
    flex: 1
  },
  leftImage: {
    width: 150,
    height: 230
  },

  rightTitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  rightNumText: {
    textAlign: "center",
    fontSize: 50,
    color: colors.white
  },

  rightContainer: {
    flex: 1
  },
  rightTitleContainer: {
    borderColor: colors.white,
    borderBottomWidth: 1,
    padding: 10,
    margin: 10
  },
  rightNumContainer: {
    margin: 20
  },
  rightButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  minusButton: {
    marginRight: 40
  },
  nextButton: {
    marginBottom: 60
  }
});
