import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MyView from './MyView'
import RegisterView from './RegisterView'
import LoginView from './LoginView'
import AddPostingView from './AddPostingView'


const Stack = createStackNavigator();

const HomeView = (props) => {
  const [username, setUsername] = useState("");

  /*
    function setUsername(newValue) {
      setUsername(newValue);
    }
    */


  return (
    <Stack.Navigator>

      <Stack.Screen name="MyView" options={{ title: 'My view' }}>
        {props => <MyView {...props} username={username} setUsername={setUsername} />}
      </Stack.Screen>

      <Stack.Screen name="LoginView" options={{ title: 'User login' }}>
        {props => <LoginView {...props} setUsername={setUsername} />}
      </Stack.Screen>

      <Stack.Screen name="RegisterView" component={RegisterView} options={{ title: 'New user registering' }} />

      <Stack.Screen name="AddPostingView" component={AddPostingView} options={{ title: 'Add new posting' }} />

    </Stack.Navigator>

  )

}


export default HomeView
