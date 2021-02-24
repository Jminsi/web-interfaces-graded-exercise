import React from 'react'
import { View, Text, Button } from 'react-native'

const MyView = (props) => {
  return (



    <View style={{
      //backgroundColor: 'yellow', 
      flex: 1, justifyContent: 'flex-start', alignItems: 'stretch'}
      }>


      <View style={{
        //backgroundColor: 'red',
        flex: 1,
        //paddingTop: 5,
        flexDirection: 'row',
        //justifyContent: 'flex-end',
        justifyContent: 'space-around',
        alignItems: 'flex-start' // CROSS AXIS
        
      }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Hello visitor</Text>
        <Button
          title="Register"
          onPress={() => props.navigation.navigate('RegisterView')}
        />
        <Button
          title="Login"
          onPress={() => props.navigation.navigate('LoginView')}
        />
        <Button
          title="Logout"
          onPress={() => props.navigation.navigate('LoginView')}
        />
      </View>


      <View style={{
        //backgroundColor: 'blue',
        flex: 9,
        //paddingTop: 0,
        //padding: '5px',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        //justifyContent: 'space-around',
        alignItems: 'center'
        
      }}>


      <Text style={{ fontSize: 16, fontWeight: '700' }}>Please login (or register at first) to be able add posting</Text>

        
        
        <Button
          title="Show my postings"
          onPress={() => props.navigation.navigate('LoginView')}
        />

        <Button
          title="Add new posting"
          onPress={() => props.navigation.navigate('LoginView')}
        />


      </View>
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