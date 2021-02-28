import React from 'react'
import { View, Text, Button } from 'react-native'

const MyView = (props) => {
  return (

    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: '#ccd5ae' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 20 }}>
        {props.username == "" ? (
          <Text style={{ fontSize: 20, fontWeight: '700' }}>Hello visitor !</Text>
        ) : (
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Hello {props.username} !</Text>
          )}

        {props.username == "" && (
          <Button
            title="Register"
            onPress={() => props.navigation.navigate('RegisterView')}
          />
        )}

        {props.username == "" && (
          <Button
            title="Login"
            onPress={() => props.navigation.navigate('LoginView')}
          />
        )}

        {props.username != "" && (
          <Button
            title="Logout"
            onPress={() => props.logout()}
          />
        )}
      </View>

      <View style={{
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>

        {props.username == "" && (
          <Text style={{ margin: 20, fontSize: 16, fontWeight: '700' }}>Welcome to the WebMarket! You can browse public postings without registering. Please login (or register at first) to be able add new postings</Text>
        )}

        {props.username != "" && (
          <Button
            title="Show my postings"
            onPress={() => props.navigation.navigate('Postings')}
          />
        )}
        {props.username != "" && (
          <Button
            title="Add new posting"
            onPress={() => props.navigation.navigate('AddPostingView')}
          />
        )}

      </View>
    </View>
  )
}

export default MyView
