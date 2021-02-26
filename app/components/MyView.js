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
        alignItems: 'flex-start', // CROSS AXIS
        marginTop: 20
        
      }}>
        { props.username == "" ? (
          <Text style={{ fontSize: 20, fontWeight: '700'}}>Hello visitor !</Text>
        ) : (
          <Text style={{ fontSize: 20, fontWeight: '700'}}>Hello {props.username} !</Text>
        )}
        
        { props.username == "" && (
          <Button
            title="Register"
            onPress={() => props.navigation.navigate('RegisterView')}
          /> 
        )}

        { props.username == "" && (
          <Button
            title="Login"
            onPress={() => props.navigation.navigate('LoginView')}
          />
        )}

        { props.username != "" && (
          <Button
            title="Logout"
            onPress={() => props.handleChange("")}
          />
        )}

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

      { props.username == "" && (
        <Text style={{ fontSize: 16, fontWeight: '700' }}>You can browse public postings without registering. Please login (or register at first) to be able add posting</Text>
      )}

      { props.username != "" && (
        <Button
          title="Show my postings"
          onPress={() => props.navigation.navigate('LoginView')}
        />
      )}
            { props.username != "" && (
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
/*
<Button
title="Login"
onPress={() => props.navigation.goBack()}
/>
*/