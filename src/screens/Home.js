import React, { Component } from "react";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import PlayModal from "../components/modal/PlayModal";
import { StyleSheet, Text, View, Image } from "react-native";
import { SocialIcon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.handleButton = this.handleButton.bind(this);
    this.playButton = this.playButton.bind(this);
    this.closeModalScreen = this.closeModalScreen.bind(this);
    this.basicRuleTransition = this.basicRuleTransition.bind(this);
    this.storyTransition = this.storyTransition.bind(this);
    this.cardCategoryTransition = this.cardCategoryTransition.bind(this);
    this.optionSettingTransition = this.optionSettingTransition.bind(this);
  }
  handleButton() {
    this.props.navigation.navigate("inputnum");
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

  storyTransition() {
    this.setState({
      modalVisible: false
    });
    this.props.navigation.navigate("story");
  }

  basicRuleTransition() {
    this.setState({
      modalVisible: false
    });
    this.props.navigation.navigate("basicrule");
  }
  cardCategoryTransition() {
    this.setState({
      modalVisible: false
    });
    this.props.navigation.navigate("cardcategory");
  }
  optionSettingTransition() {
    this.setState({
      modalVisible: false
    });
    this.props.navigation.navigate("optionsetting");
  }

  // 遊び方ページ遷移  end

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <View style={styles.logo}>
            <Image source={require("../img/header-logo.png")} />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>SAUNA SHIRITORI</Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <RoundedButton
            text={"はじめる"}
            textColor={colors.pink01}
            background={colors.white}
            style={styles.startButton}
            handleButton={this.handleButton}
            width={"80%"}
          />

          <RoundedButton
            text={"遊び方"}
            textColor={colors.white}
            handleButton={this.playButton}
            backButton={this.backButton}
            width={"80%"}
          />
          <View style={styles.socialContainer}>
            <TouchableOpacity>
              <SocialIcon type="twitter" />
            </TouchableOpacity>
            <TouchableOpacity>
              <SocialIcon type="facebook" />
            </TouchableOpacity>
          </View>
        </View>

        <PlayModal
          modalVisible={modalVisible}
          closeModalScreen={this.closeModalScreen}
          storyTransition={this.storyTransition}
          basicRuleTransition={this.basicRuleTransition}
          cardCategoryTransition={this.cardCategoryTransition}
          optionSettingTransition={this.optionSettingTransition}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.pink01,
    padding: 20
  },
  welcomeWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    alignItems: "center",
    paddingBottom: 50
  },
  title: {
    alignItems: "center"
  },
  titleText: {
    fontSize: 27,
    color: colors.white,
    fontWeight: "600"
  },
  socialContainer: {
    flexDirection: "row",
    paddingTop: 40,
    
  }
});
