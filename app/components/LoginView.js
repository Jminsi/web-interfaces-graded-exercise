import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'


const LoginView = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 40 }}>Email:</Text>
      <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
        value="your@email-address.com">
      </TextInput>

      <Text style={{ fontSize: 16, fontWeight: '700' }}>Password:</Text>
      <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
        value="your-password">
      </TextInput>

      <Button
          title="Login"
          onPress={() => props.navigation.navigate('MyView')}
        />

    </View>
  )
}


export default LoginView
