import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import App from './App';
import InstaMobile from './App';
import Login from './Login';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    InstaMobile: {
      screen: InstaMobile
    }
  });
  
  export default createAppContainer(AppNavigator);