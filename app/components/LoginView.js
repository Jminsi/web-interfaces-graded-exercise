import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'


const LoginView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 40 }}>Email:</Text>
      <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
        value={ email }
        placeholder="your@email-address.com"
        onChangeText={ value => setEmail(value)}
      />

      <Text style={{ fontSize: 16, fontWeight: '700' }}>Password:</Text>
      <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
        value={ password }
        placeholder="your-password"
        onChangeText={ value => setPassword(value)}
      />


      <Button
          title="Login"
          onPress={() => props.navigation.navigate('MyView')}
        />

    </View>
  )
}


export default LoginView
