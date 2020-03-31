import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import PlayerSelect from "../screens/PlayerSelect";
import InputNum from "../screens/InputNum";
import ImageOutput from "../screens/ImageOutput";
import Important from "../screens/settings/Important";
import BasicRule from "../screens/settings/BasicRule";
import Tutrial from "../screens/Tutrial";
import Rule from "../screens/Rule";

const screens = {
  Home: {
    screen: Home
  },
  PlayerSelect: {
    screen: PlayerSelect
  },
  InputNum: {
    screen: InputNum
  },
  ImageOutput: {
    screen: ImageOutput
  },
  Important: {
    screen: Important
  },
  BasicRule: {
    screen: BasicRule
  },
  Tutrial: {
    screen: Tutrial
  },
  Rule: {
    screen: Rule
  }
};

const StackNavigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    header: null
  }
});
export default createAppContainer(StackNavigation);
