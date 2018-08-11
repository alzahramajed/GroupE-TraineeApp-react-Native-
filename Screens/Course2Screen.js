import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class Course2Screen extends Component {constructor(props) {
  super(props);
  this.state = {
    titleText: "AWS Advance Course~\n",
    bodyText: 'By taking AWS program, will learn about 70+ AWS services and solutions at your own pace and some courses take 10 minutes or less.\n Cost:\n $200\n Time:\n  6 months\n  ClassRoom Open:\n  June 21, 2019\n'
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


export default Course2Screen;
