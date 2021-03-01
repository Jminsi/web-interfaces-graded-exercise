import React, { Component, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MyView from './MyView'
import RegisterView from './RegisterView'
import LoginView from './LoginView'
import AddPostingView from './AddPostingView'
import MyPostingsView from './MyPostingsView'
import EditPostingView from './EditPostingView'


const Stack = createStackNavigator();

const HomeView = (props) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  /*
    function setUsername(newValue) {
      setUsername(newValue);
    }
    */
  function logout() {
    setUsername("");
    setUserId("");
    Alert.alert("User logout");
  }

  function login(userId, username) {
    setUsername(username);
    setUserId(userId);
  }


  return (
    <Stack.Navigator>

      <Stack.Screen name="MyView" options={{ title: 'My view' }}>
        {props => <MyView {...props} username={username} logout={logout} />}
      </Stack.Screen>

      <Stack.Screen name="LoginView" options={{ title: 'User login' }}>
        {props => <LoginView {...props} login={login}/>}
      </Stack.Screen>

      <Stack.Screen name="RegisterView" component={RegisterView} options={{ title: 'New user registering' }} />
      
      <Stack.Screen name="AddPostingView" options={{ title: 'Add new posting' }}>
        {props => <AddPostingView {...props} userId={userId} />}
      </Stack.Screen>

      <Stack.Screen name="MyPostingsView" options={{ title: 'My postings' }}>
        {props => <MyPostingsView {...props} userId={userId} />}
      </Stack.Screen>

      <Stack.Screen name="EditPostingView" options={{ title: 'Edit posting' }}>
        {props => <EditPostingView {...props} userId={userId} />}
      </Stack.Screen>

    </Stack.Navigator>

  )

}


export default HomeView
