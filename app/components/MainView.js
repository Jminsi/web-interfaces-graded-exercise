/*
import React from 'react'
import { View, Text } from 'react-native'

const MainView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Main View</Text>
    </View>
  )
}

export default MainView
*/

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './RegisterView'
//import View2 from './components/LoginView'
//import View3 from './components/View3'

const Stack = createStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (

        <Stack.Navigator>
          <Stack.Screen name="View1" component={View1} />
        </Stack.Navigator>

    )
  }
}
