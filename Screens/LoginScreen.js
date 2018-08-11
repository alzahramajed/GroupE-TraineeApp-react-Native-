import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import * as firebase from 'firebase';
//firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7SBPJ5Y-Y1gqPzE9KQcuKxl4pVtRkssc",
  authDomain: "group-e-trainee-app.firebaseapp.com",
  databaseURL: "https://group-e-trainee-app.firebaseio.com",
  projectId: "group-e-trainee-app",
  storageBucket: "group-e-trainee-app.appspot.com"};

firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state = ({
      email: '',
      password:''
    })
  }

signUpUser = (email,password) => {
try {
  if ( this.state.Password.length <6){
    alert("Please enter a minimmum 6 characters ")
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email,password)
}
catch (error){
  console.log(error.toString())
}

}

loginUser = (email,password) => {

}

  render(){
    return (
<Container style={styles.container}>
    <Form>
    //email
      <Item floatingLabel>
        <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitliz="none"
           onChangeText= {(email)=> this.setState ({email})}
            />
      </Item>

      //pass
      <Item floatingLabel>
        <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitliz="none"
            onChangeText= {(password)=> this.setState ({password})}
            />
      </Item>

      //login
      <Button style={{marginTop:10}}
full
rounded
success
onPress={() => this.props.navigation.navigate('HomeScreen')}
      >
      <Text style={{color:'white'}}> Login </Text>
      </Button>

      //signUp
      <Button style={{marginTop:10}}
full
rounded
primary
onPress={() => this.props.navigation.navigate('AccountScreen')}
     >
      <Text style={{color:'white'}}> Sign UP</Text>
      </Button>
    </Form>
</Container>


    //  <View>
    //    <Text> This is the Login Screen </Text>
    //    <Button onPress={() => this.loginUser.navigation.navigate('HomeScreen')} title="Go to the Home Screen"/>
    //  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
export default LoginScreen;
