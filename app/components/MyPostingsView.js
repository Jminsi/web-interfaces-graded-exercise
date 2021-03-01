import React, { useState, useEffect } from 'react'
import { Button, ScrollView, View, Text, TextInput, StyleSheet } from 'react-native'
import Posting from './Posting';
import axios from 'axios';
import constants from '../constants.json';


const MyPostingsView = (props) => {

  const [postings, setPostings] = useState([]);

  function getMyPostings() {
    axios({
      method: 'get',
      url: constants['api-address'] + '/postings/user/' + props.userId,
    })
      .then(response => {
        //handle success
        setPostings(response.data)
      })
      .catch(response => {
        //handle error
        console.log(response);
        alert("Failed to get postings!");
      });
  }

  //getMyPostings();

  useEffect(() => {
    //handleRegistration()
    getMyPostings()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ccd5ae' }}>

      <ScrollView style={{ marginTop: 10, marginBottom: 10 }} persistentScrollbar={true} contentContainerStyle={{ alignItems: 'center' }}>
        {postings.map(p => <Posting {...p} key={p.id} myPosting={1} nagivation={props.navigation} ></Posting>)}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  }
})


export default MyPostingsView
