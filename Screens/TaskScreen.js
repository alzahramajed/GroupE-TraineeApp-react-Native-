import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class TaskScreen extends Component {
  render(){
    return (
      <View style={{flexDirection: 'row'}}>
      <View style={{flex:1 , marginRight:10}} >
          <Button title="Upload file" onPress={() => {}}></Button>
      </View>
      <View style={{flex:1}} >
          <Button title="Submit" onPress={() => {}}></Button>
      </View>
  </View>

    );
  }
}


export default TaskScreen;
