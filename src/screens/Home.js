import React, { Component } from "react";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import PlayModal from "../components/modal/PlayModal";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { SocialIcon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../styles/global";

const { width, height } = Dimensions.get("screen");

export default class Home extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.playButton = this.playButton.bind(this);
    this.closeModalScreen = this.closeModalScreen.bind(this);
    this.basicRuleTransition = this.basicRuleTransition.bind(this);
    this.importantTransition = this.importantTransition.bind(this);
  }

  playButton() {
    this.setState({
      modalVisible: true
    });
  }
  closeModalScreen() {
    this.setState({
      modalVisible: false
    });
  }

  // 遊び方ページ遷移  start

  importantTransition() {
    this.setState({
      modalVisible: false
    });
    this.props.navigation.navigate("Important");
  }

  basicRuleTransition() {
    this.setState({
      modalVisible: false
    });
    this.props.navigation.navigate("BasicRule");
  }

  // 遊び方ページ遷移  end

  render() {
    const { modalVisible } = this.state;
    return (
      <LinearGradient
        colors={["#EBB4B4", "#E98989"]}
        style={globalStyles.wrapper}
      >
        <View style={globalStyles.container}>
          <View style={styles.logo}>
            <Image source={require("../img/header-logo.png")} />
          </View>
          <View style={styles.title}>
            <Text style={globalStyles.titleText}>SAUNA SHIRITORI</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <RoundedButton
              text={"はじめる"}
              textColor={colors.pink01}
              background={colors.white}
              handleButton={() =>
                this.props.navigation.navigate("Tutrial")
              }
              marginBottom={30}
            />

            <RoundedButton
              text={"遊び方"}
              textColor={colors.white}
              handleButton={this.playButton}
              backButton={this.backButton}
            />
            {/* <View style={styles.socialContainer}>
              <TouchableOpacity>
                <SocialIcon type="twitter" />
              </TouchableOpacity>
              <TouchableOpacity>
                <SocialIcon type="facebook" />
              </TouchableOpacity>
            </View> */}
          </View>

          <PlayModal
            modalVisible={modalVisible}
            closeModalScreen={this.closeModalScreen}
            importantTransition={this.importantTransition}
            basicRuleTransition={this.basicRuleTransition}
          />
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: height * 0.1
  },
  logo: {
    alignItems: "center",
    paddingBottom: 50
  },
  title: {
    alignItems: "center"
  },
  socialContainer: {
    flexDirection: "row",
    paddingTop: 40
  }
});
