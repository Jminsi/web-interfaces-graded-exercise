/*
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Home View</Text>
      <Button title="Login"/>
      <Button title="Logout"/>
      <Button title="Register"/>
      <Button title="My postings"/>
    </View>
  )
}

export default HomeView

*/
/*
import React from 'react'
import { View, Text, Button } from 'react-native'


const HomeView = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>HomeView</Text>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('View3')}
      />
    </View>
  )
}

export default HomeView
*/

import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MyView from './MyView'
import RegisterView from './RegisterView'
import LoginView from './LoginView'
import AddPostingView from './AddPostingView'


const Stack = createStackNavigator();

//export default class StackNavigation extends Component {
//  render() {
const HomeView = (props) => {
  const [username, setUsername] = useState("");


  function handleChange(newValue) {
    setUsername(newValue);
  }

  return (
/*
<View>
    <Text>{ props.name }</Text>
  </View>
          <Stack.Screen name="MyView" component={MyView} {...props} name="foo"/>
          <Stack.Screen name="LoginView" component={LoginView} options={{ title: 'User login' }} />
          */

        <Stack.Navigator>

          <Stack.Screen name="MyView">
            {props => <MyView {...props} username={username} handleChange={handleChange} />}
          </Stack.Screen>
          <Stack.Screen name="LoginView">
            {props => <LoginView {...props} handleChange={handleChange} />}
          </Stack.Screen>
          <Stack.Screen name="RegisterView" component={RegisterView} options={{ title: 'New user registering' }} />
          <Stack.Screen name="AddPostingView" component={AddPostingView} options={{ title: 'Add new posting' }} />
        </Stack.Navigator>

    )
  //}
}

export default HomeView

//          
//<Stack.Screen name="View2" component={View2} options={{ title: 'Title for View 2' }} />
//<Stack.Screen name="View3" component={View3} />
