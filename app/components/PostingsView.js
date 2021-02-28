import React, { useState } from 'react'
import { Button, ScrollView, View, Text,TextInput, StyleSheet  } from 'react-native'
import Posting from './Posting';
import axios from 'axios';
import constants from '../constants.json';


const PostingsView = (props) => {

  const [postings, setPostings] = useState([]);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  
  /*
  function openSearch() {
  
  }
  */
  
  function getAllPostings() {
    axios({
      method: 'get',
      url: constants['api-address'] + '/postings',
      })
      .then(response => {
          //handle success
          //alert("Image upload completed");
          //this.setState({ isSubmitting: false })
          //postings3 = response.data;
          //console.log(response);
          setPostings(response.data)
      })
      .catch(response => {
          //handle error
          console.log(response);
          alert("Failed to get postings!");
      });
  }



  return (
    <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#ccd5ae' }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 10 }}>Postings</Text>
      
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}}>

      <Button 
        title="All postings"
        onPress={() => getAllPostings()}
      />
      <Button
        title="By search"
        onPress={() => setSearch(true)}
      />



    </View>



          <View style={{ height: 100, flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#ccd5ae'}}>

          <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Search text:</Text>
          <TextInput style={styles.input}
            value={ searchText }
            placeholder="Search text"
            onChangeText={ value => setSearchText(value)}
          />
    
          <Button
            title="Search"
            onPress={() => setSearch(false)}
          /> 
    
        </View>











      <ScrollView persistentScrollbar={true} contentContainerStyle={{ alignItems: 'center' }}>
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
    padding: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  }
})

export default PostingsView
