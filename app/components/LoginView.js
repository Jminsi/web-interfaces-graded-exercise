import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'


const LoginView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function loginClick() {
    if (email == "minsi") {
      props.setUsername("Minsi")
      props.navigation.navigate('MyView')
    } else {
      Alert.alert(
        "Login failed",
        "Check that your email (login) and password are correct"
      );
 
    }
  }


  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Email:</Text>
      <TextInput style={styles.input}
        value={ email }
        placeholder="your@email-address.com"
        onChangeText={ value => setEmail(value)}
      />

      <Text style={{ fontSize: 16, fontWeight: '700' }}>Password:</Text>
      <TextInput style={styles.input}
        value={ password }
        placeholder="your-password"
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
    padding: 5
  }
})





export default LoginView
