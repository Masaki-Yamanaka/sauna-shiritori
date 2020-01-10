import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import PlayerSelect from "../screens/PlayerSelect";
import InputNum from "../screens/InputNum";
import ImageOutput from "../screens/ImageOutput";

const screens = {
  Home: {
    screen: Home,    
  },
  PlayerSelect: {
    screen: PlayerSelect
  },
  InputNum: {
    screen: InputNum
  },
  ImageOutput: {
    screen: ImageOutput
  }

};

const StackNavigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    header: null,
  }
})
export default createAppContainer(StackNavigation)