import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import { colors } from "react-native-elements";
import textColor from "../../styles/colors";

export default class ClapsButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      claps: []
    };
    this.clap = this.clap.bind(this);
    this.keepClapping = this.keepClapping.bind(this);
    this.stopClapping = this.stopClapping.bind(this);
  }

  animationComplete(countNum) {
    const { claps } = this.state;
    claps.splice(claps.indexOf(countNum), 1);
    this.setState({ claps });
  }

  clap() {
    const { count, claps } = this.state;
    this.setState({ count: count + 1 });
    claps.push(count);
  }

  keepClapping() {
    this.clapTimer = setInterval(() => this.clap(), 150);
  }

  stopClapping() {
    if (this.clapTimer) {
      clearInterval(this.clapTimer);
    }
  }

  renderClaps() {
    return this.state.claps.map(countNum => (
      <ClapBubble
        key={countNum}
        count={countNum}
        animationComplete={this.animationComplete.bind(this)}
      />
    ));
  }

  render() {
    const clapIcon =
      this.state.count > 0 ? (
        <Image
          source={require("../../img/thizz-clapped.png")}
          style={{ height: 25, width: 25 }}
        />
      ) : (
        <Image
          source={require("../../img/thizz.png")}
          style={{ height: 25, width: 25 }}
        />
      );
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={this.clap}
          activeOpacity={0.7}
          style={styles.clapButton}
          onPressIn={this.keepClapping}
          onPressOut={this.stopClapping}
        >
          {clapIcon}
        </TouchableOpacity>
        {this.renderClaps()}
      </View>
    );
  }
}

class ClapBubble extends Component {
  constructor() {
    super();

    this.state = {
      yPosition: new Animated.Value(0),
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.yPosition, {
        toValue: -120,
        duration: 500
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500
      })
    ]).start(() => {
      setTimeout(() => {
        this.props.animationComplete(this.props.count);
      }, 500);
    });
  }

  render() {
    let animationStyle = {
      transform: [{ translateY: this.state.yPosition }],
      opacity: this.state.opacity
    };

    return (
      <Animated.View style={[styles.clapBubble, animationStyle]}>
        <Text style={styles.clasText}>+{this.props.count}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  clapButton: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#ecf0f1",
    bottom: 20,
    right: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
  },
  clapBubble: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  clasText: {
    color: textColor.pink01,
    fontSize: 18
  }
});
