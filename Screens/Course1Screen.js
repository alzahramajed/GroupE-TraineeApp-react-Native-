import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from "react-native";
import { Header, Body } from "native-base";

class Course1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Summer Internship Program\n",
      bodyText: 'You will learn more and more through in eight paths which are Explorer, Analyst, DevOpser, Developer, Tester, Hacker, Robot, and Hunter.\n Cost:\n FREE\n Time:\n  3 months\n  ClassRoom Open:\n  June 21, 2019\n '
    };
  }

  render() {
    return (
      <View style ={{alignItems:'center'}}>
            <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
      <Button onPress={() => this.props.navigation.navigate('TaskScreen')} title="Enroll Now"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

  //render(){
    //return (
     // <View>
      //  <Header> Welcome to our Summer Internship Program
//</Header>
// <Text > In this program, you will learn more and more through in eight paths which are Explorer, Analyst, DevOpser, Developer, Tester, Hacker, Robot, and Hunter.</Text>
      //</View>
      

    //);
  //}
//}

export default Course1Screen;
