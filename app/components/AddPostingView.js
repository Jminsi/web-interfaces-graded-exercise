import React from 'react'
import { View, Text, TextInput, Button, ScrollView } from 'react-native'


const AddPostingView = (props) => {

  

  return (
    <View style={{ flex: 1}}>
      <ScrollView persistentScrollbar={true}    contentContainerStyle={{alignItems: 'center' }}>

        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 40 }}>Title:</Text>
        <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Posting title">
        </TextInput>

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Description:</Text>
        <TextInput style={{width: '90%', height: 140, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Item description and details">
        </TextInput>

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Category:</Text>
        <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Item category, clothing, cars etc.">
        </TextInput>

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Location:</Text>
        <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Item location, city, country">
        </TextInput>

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Images:</Text>
        <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Item images">
        </TextInput>

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Price:</Text>
        <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Item price">
        </TextInput>

        <Text style={{ fontSize: 16, fontWeight: '700' }}>Delivery:</Text>
        <TextInput style={{width: '90%', height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40, padding: 5}}
          value="Describe delivery options, shipping or pickup location etc.">
        </TextInput>

        <Button style={{marginBottom: 40}}
            title="Add posting"
            onPress={() => props.navigation.navigate('MyView')}
          />
          <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 40 }}></Text>

      </ScrollView>
    </View>
  )
}

export default AddPostingView
