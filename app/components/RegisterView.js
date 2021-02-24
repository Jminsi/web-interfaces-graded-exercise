import React from 'react'
import { View, Text, Button } from 'react-native'

const RegisterView = (props) => {
  return (




<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>RegisterVie42w</Text>
      <Button
        title="Go to View 2"
        onPress={() => props.navigation.navigate('MyView')}
      />
    </View>
  )
}

export default RegisterView
