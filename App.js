import React, { Component } from "react";
import Home from "./src/screens/Home";
import ImageOutput from "./src/screens/ImageOutput";
import InputNum from "./src/screens/InputNum";
import BasicRule from "./src/screens/settings/BasicRule";
import CardCategory from "./src/screens/settings/CardCategory";
import OptionSetting from "./src/screens/settings/OptionSetting";
import Story from "./src/screens/settings/Story";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  home: Home,
  inputnum: InputNum,
  // imageoutput: ImageOutput,
  story: Story,
  basicrule: BasicRule,
  cardcategory: CardCategory,
  optionsetting: OptionSetting
});
export default createAppContainer(AppNavigator);
