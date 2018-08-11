import React, { Component } from "react";

import {
  
 AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableOpacity, 
  TextInput,
  ScrollView

} from "react-native";


import {createBottomTabNavigator} from 'react-navigation'
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

class HomeScreen extends Component {
  render(){
    return (
      <View>
        <Text> This is the Home Screen </Text>
      </View>
    );
  }
}
// Home

class Home extends Component {
  render(){
    return(
      <View>
      <Text>Welcome to the latest training programs:</Text>
      <Button onPress={() => this.props.navigation.navigate('Course1Screen')} title="Summer Intership Program"/>
      <Button onPress={() => this.props.navigation.navigate('Course2Screen')} title="AWS Advane Course"/>

      </View>
    );
  }
}
// Profile Screen

class Profile extends Component {
 

  render(){
    return(
     


      <View>
              <Text> Profile:</Text>
        <Text style={styles.big}>NAME: </Text>
                <Text style={styles.big}>EMAIL: </Text>


      <Button onPress={() => this.props.navigation.navigate('Skills')} title="Skills"/>


 <Button style={{marginTop:20}}
full

success
onPress={() => this.props.navigation.navigate('AccountScreen')}
      >
      <Text style={{color:'white'}}> Edit </Text>
      </Button>



 <Button style={{marginTop:20}}
full


onPress={() => this.props.navigation.navigate('Home')}
      >
      <Text style={{color:'white'}}> Home  </Text>
      </Button>
 <Button style={{marginTop:20}}
full

success
onPress={() => this.props.navigation.navigate('Skills')}
      >
      <Text style={{color:'white'}}> Skills </Text>
      </Button>
 <Button style={{marginTop:20}}
full


onPress={() => this.props.navigation.navigate('UploadTask')}
      >
      <Text style={{color:'white'}}> UploadTask </Text>
      </Button>




         </View>

    );
  }
}

// Upload Task Screen
 class UploadTask extends Component {
  render(){
    return(
      <View>
      <Text> Once your task is done. Go to the next page to submit your file. </Text>
      <Button onPress={() => this.props.navigation.navigate('TaskScreen')} title="Next page"/>

      </View>
  );
  }
 }


// Skills Screen
class Skills extends Component {

  state = {
      names: [
         {
            id: 0,
            name: 'IT automaion',
         },
         {
            id: 1,
            name: 'GitHub',
         },
         {
            id: 2,
            name: 'Computer network',
         }
      ]
   }

  render(){
    return(
      <View>
      <Text style={[styles.black]}>Skills:</Text>

 

<ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>


      </View>
    );
  }
}



const styles = StyleSheet.create({
  big: {
 fontSize: 40,
      color: 'gray',
borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    textShadowColor: 'green',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   },
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },

   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'gray'
          

   },

  black: {
    fontWeight: 'bold',
    fontSize: 40,

     color: 'gray',
borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    textShadowColor: 'white',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
  },
});


const HomeScreenTabNavigator = createBottomTabNavigator ({
  Home: {
    screen: Home
  },
  Profile:{
    screen: Profile
  },
  UploadTask: {
    screen: UploadTask
  },
  Skills: {
    screen: Skills
  }
}
, {
  animationEnabled: true
}
)











export default HomeScreenTabNavigator;
