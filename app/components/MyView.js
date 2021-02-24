import React from 'react'
import { View, Text, Button } from 'react-native'

const MyView = (props) => {
  return (



    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <View style={{
        flex: 1,
        paddingTop: 12,
        paddingBottom: 12,
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        justifyContent: 'space-around',
        alignItems: 'baseline' // CROSS AXIS
        
      }}>
      <Button
        title="Register"
        onPress={() => props.navigation.navigate('RegisterView')}
      />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('LoginView')}
      />

      </View>

      <Text style={{ fontSize: 40, fontWeight: '700' }}>MyView</Text>

      <Button
        title="Login"
        onPress={() => props.navigation.goBack()}
      />

      <Button
        title="To start"
        onPress={() => props.navigation.reset({
          index: 0,
          routes: [{ name: 'View1' }],
        })}
      />
    </View>
  )
}

export default MyView
/*
<Button
title="Login"
onPress={() => props.navigation.goBack()}
/>
*/