import React, { Component, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MyView from './MyView'
import RegisterView from './RegisterView'
import LoginView from './LoginView'
import AddPostingView from './AddPostingView'


const Stack = createStackNavigator();

const HomeView = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  /*
    function setUsername(newValue) {
      setUsername(newValue);
    }
    */
  function logout() {
    setUsername("");
    setEmail("");
    Alert.alert("User logout");
  }

  function login(email, username) {
    setUsername(username);
    setEmail(email);
  }



  return (
    <Stack.Navigator>

      <Stack.Screen name="MyView" options={{ title: 'My view' }}>
        {props => <MyView {...props} username={username} logout={logout} />}
      </Stack.Screen>

      <Stack.Screen name="LoginView" options={{ title: 'User login' }}>
        {props => <LoginView {...props} setUsername={setUsername} login={login}/>}
      </Stack.Screen>

      <Stack.Screen name="RegisterView" component={RegisterView} options={{ title: 'New user registering' }} />

      
      <Stack.Screen name="AddPostingView" options={{ title: 'Add new posting' }}>
        {props => <AddPostingView {...props} email={email} />}
      </Stack.Screen>



    </Stack.Navigator>

  )

}


export default HomeView
