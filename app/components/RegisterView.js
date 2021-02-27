import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'

const RegisterView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");


  function registerClick() {
    if (email.trim() != "" &&
        password.trim() != "" &&
        username.trim() != "" &&
        contact.trim() != "") {
          /*Alert.alert(
            "Reg ok",
            "Check that all fields are filled"
          );*/
          props.navigation.navigate('MyView')
    

    } else {
      Alert.alert(
        "Registeration failed",
        "Check that all fields are filled"
      );
 
    }
  }



  return (
    
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Email (login):</Text>
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

      <Text style={{ fontSize: 16, fontWeight: '700' }}>Visible name/nick:</Text>
      <TextInput style={styles.input}
        value={ username }
        placeholder="Your visible name or nickname"
        onChangeText={ value => setUsername(value)}
      />

    <Text style={{ fontSize: 16, fontWeight: '700' }}>Contact info:</Text>
      <TextInput style={styles.input}
        value={ contact }
        placeholder="How to contact you (phone number and/or email)"
        onChangeText={ value => setContact(value)}
      />

      <Button
          title="Register"
          onPress={() => registerClick() }
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
    padding: 5
  }
})

export default RegisterView
