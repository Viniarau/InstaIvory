import React, {Component} from 'react';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import InstaMobile from './App';
import Login from './Login';
import Profile from './Profile';
import AuthLoading from './AuthLoading';
import Camera from './Camera';

    const AppNavigator = createMaterialBottomTabNavigator({
        InstaMobile: {
          screen: InstaMobile,
          navigationOptions: {
            labeled: false,
            tabBarIcon:({tintColor}) => (
              <Icon name="ios-home" color={tintColor} size={24} />
            )
        },      
        },
        Camera: {
         screen: Camera,
         navigationOptions: {
          labeled: false,
          tabBarIcon:({tintColor}) => (
            <Icon name="ios-camera" color={tintColor} size={24} />
          )
        },      
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          labeled: false,
         tabBarIcon:({tintColor}) => (
           <Icon name="ios-person" color={tintColor} size={24} />
         )
       },      
     }
    });
    const AuthNavigator = createStackNavigator({
        Login: Login,
    });

  export default createAppContainer(createSwitchNavigator(
    {
      AuthNavigator: AuthNavigator,
      AppNavigator: AppNavigator,
      AuthLoading: AuthLoading,
    },
    {
      initialRouteName: "AuthLoading",
    }
  ));
