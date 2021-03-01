import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import axios from 'axios';
import constants from '../constants.json';


const LoginView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginClick() {
    if (email.trim() != "" &&
      password.trim() != "") {

      axios({
        method: 'post',
        url: constants['api-address'] + '/users/login',
        data: {
          email: email,
          password: password
        },
      })
        .then(response => {
          //handle success
          props.login(response.data.id, response.data.username)
          props.navigation.navigate('MyView')
          Alert.alert("User login succesful");
        })
        .catch(response => {
          //handle error
          console.log(response);
          Alert.alert("Login failed", "Check email (login) and password");
        });
    } else {
      Alert.alert(
        "Can't login",
        "Check that all fields are filled"
      );
    }
  }


  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#ccd5ae'}}>

      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Email:</Text>
      <TextInput style={styles.input}
        value={ email }
        placeholder="your@email-address.com"
        onChangeText={ value => setEmail(value)}
      />

      <Text style={{ fontSize: 16, fontWeight: '700' }}>Password:</Text>
      <TextInput style={styles.input}
        value={ password }
        placeholder="Your password"
        onChangeText={ value => setPassword(value)}
      />

      <Button
          title="Login"
          onPress={() => loginClick() }
        />

    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  }
})


export default LoginView
