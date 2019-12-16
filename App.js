import React, { Component } from "react";
import Home from './src/screens/Home'
import ImageOutput from './src/screens/ImageOutput'
import InputNum from './src/screens/InputNum'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';





const AppNavigator = createStackNavigator(
  
  {
    home: Home,
    inputnum: InputNum,
    imageoutput: ImageOutput
  }
);
export default createAppContainer(AppNavigator);