import React, { useState } from 'react'
import { Button, ScrollView, View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import Posting from './Posting';
import axios from 'axios';
import constants from '../constants.json';


const PostingsView = (props) => {

  const [postings, setPostings] = useState([]);
  const [searchText, setSearchText] = useState("");


  function getAllPostings() {
    axios({
      method: 'get',
      url: constants['api-address'] + '/postings',
    })
      .then(response => {
        //handle success
        setPostings(response.data)
      })
      .catch(response => {
        //handle error
        console.log(response);
        Alert.alert("Failed to get postings!");
      });
  }


  function searchPostings(from) {
    if (searchText.trim() != "") {
      axios({
        method: 'get',
        url: constants['api-address'] + '/postings/' + from + '/' + searchText,
      })
        .then(response => {
          //handle success
          setPostings(response.data)
        })
        .catch(response => {
          //handle error
          console.log(response);
          Alert.alert("Failed to search postings!");
        });
    }
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ccd5ae' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 5 }}>Postings</Text>
      <Button
        title="Show all postings"
        onPress={() => getAllPostings()}
      />

      <TextInput style={styles.input}
        value={searchText}
        placeholder="Search text"
        onChangeText={value => setSearchText(value)}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Search from:</Text>
        <Button title="Category" onPress={() => searchPostings('category')} />
        <Button title="Location" onPress={() => searchPostings('location')} />
        <Button title="Date" onPress={() => searchPostings('date')} />
      </View>

      <ScrollView style={{ marginTop: 10, marginBottom: 10 }} persistentScrollbar={true} contentContainerStyle={{ alignItems: 'center' }}>
        {postings.map(p => <Posting {...p} key={p.id}></Posting>)}
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


export default PostingsView
