import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './RegisterView'

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
