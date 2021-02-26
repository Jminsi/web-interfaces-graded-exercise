import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeView from './HomeView'
import PostingsView from './PostingsView'
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      name: "dummy",
      calculatorA: 0,
      calculatorB: 0,
      isNameSaved: false
    }

  }

  render() {
    return (
      <NavigationContainer> 
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            //component={HomeView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={color} size={size} />)
            }}
          ///>
          >
            { props => <HomeView
                          {...this.props}
                          name={ this.state.name }
                          onNameChange={ this.onNameChange }
                          onSaveName={ this.onSaveName }
                          isNameSaved={ this.state.isNameSaved }
                        />}
          </Tab.Screen>




          <Tab.Screen 
            name="Postings" 
            component={PostingsView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-list" color={color} size={size} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
