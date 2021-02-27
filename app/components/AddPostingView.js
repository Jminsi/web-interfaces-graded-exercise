import React, { useState } from 'react'
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native'


const AddPostingView = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  //const [images, setPassword] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: '#ccd5ae'}}>
      <ScrollView persistentScrollbar={true}    contentContainerStyle={{alignItems: 'center' }}>

      <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Category:</Text>
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
            title="Add posting"
            onPress={() => props.navigation.navigate('MyView')}
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


export default AddPostingView
