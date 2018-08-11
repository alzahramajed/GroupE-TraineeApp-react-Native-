import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'

import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import Course1Screen from './Screens/Course1Screen'
import Course2Screen from './Screens/Course2Screen'
import TaskScreen from './Screens/TaskScreen'
import AccountScreen from './Screens/AccountScreen'

export default class App extends React.Component {
  render() {
    return (
<AppNavigator/>
    );
  }
}

const AppNavigator = createStackNavigator ({
  LoginScreen: { screen : LoginScreen},
  HomeScreen: {screen : HomeScreen},
  Course1Screen: {screen : Course1Screen},
  Course2Screen: {screen : Course2Screen},
    TaskScreen: {screen : TaskScreen},
        AccountScreen: {screen : AccountScreen}

})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
