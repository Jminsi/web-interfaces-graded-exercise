import React, { useState } from 'react'
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native'
import axios from 'axios';
import constants from '../constants.json';

export default function EditPostingView({ route, navigation }) {

//const EditPostingView = (props) => {
  const [category, setCategory] = useState(route.params.category);
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [location, setLocation] = useState(route.params.location);
  const [price, setPrice] = useState(route.params.price);
  const [delivery, setDelivery] = useState(route.params.delivery);



  function saveClick() {
    if (category.trim() != "" &&
        title.trim() != "" &&
        description.trim() != "" &&
        location.trim() != "" &&
        price.trim() != "" &&
        delivery.trim() != "") {

      axios({
        method: 'post',
        url: constants['api-address'] + '/postings/edit',
        data: {
          category: category,
          title: title,
          description: description,
          location: location,
          price: price,
          delivery :delivery,
          posting_id: route.params.posting_id
        },
      })
        .then(response => {
          //handle success
          navigation.navigate('MyPostingsView')
          Alert.alert("Posting edited");
        })
        .catch(response => {
          //handle error
          console.log(response);
          Alert.alert("Server rejected editing posting");
        });
    } else {
      Alert.alert(
        "Can't edit posting",
        "Check that all fields are filled"
      );
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#ccd5ae'}}>
      <ScrollView persistentScrollbar={true}    contentContainerStyle={{alignItems: 'center' }}>

      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Category: {route.params.aaa}</Text>
        <TextInput style={styles.input}
          value={ category }
          placeholder="Item category, clothing, cars etc."
          onChangeText={ value => setCategory(value)}
        />

        <Text style={{ fontSize: 16, fontWeight: '700'}}>Title:</Text>
        <TextInput style={styles.input}
          value={ title }
          placeholder="Posting title"
          onChangeText={ value => setTitle(value)}
        />

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Description:</Text>
        <TextInput style={styles.description}
          multiline={true}
          value={ description }
          placeholder="Item description and details"
          onChangeText={ value => setDescription(value)}
        />

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Location:</Text>
        <TextInput style={styles.input}
          multiline={true}
          value={ location }
          placeholder="Item location, city, country"
          onChangeText={ value => setLocation(value)}
        />

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Price (EUR):</Text>
        <TextInput style={styles.input}
          multiline={true}
          value={ price }
          placeholder="Item price (EUR)"
          onChangeText={ value => setPrice(value)}
        />

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Delivery:</Text>
        <TextInput style={styles.input}
          multiline={true}
          value={ delivery }
          placeholder="Item delivery option(s), shipping or pickup location etc."
          onChangeText={ value => setDelivery(value)}
        />

        <Button style={{marginBottom: 40}}
            title="Save changes"
            //onPress={() => props.navigation.navigate('MyView')}
            onPress={() => saveClick() }
          />
          <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 40 }}></Text>

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
    borderBottomRightRadius: 25

  },
  description: {
    width: '90%',
    height: 140,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  }
})


//export default EditPostingView
