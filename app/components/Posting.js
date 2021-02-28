import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import gallery from '../assets/gallery.png';


const Posting = (props) => {

  return (
    <View style={styles.container}>

      <Text style={styles.infotitle}>Category:
        <Text style={styles.infotext}> {props.category}</Text>
      </Text>

      <Text style={styles.title}>{props.title}</Text>

      <Text style={styles.description}>{props.description}</Text>

      <Text style={styles.infotitle}>Price (EUR):
        <Text style={styles.infotext}> {props.price}</Text>
      </Text>

      <Text style={styles.infotitle}>Location:
        <Text style={styles.infotext}> {props.location}</Text>
      </Text>

      <Text style={styles.infotitle}>Posted:
        <Text style={styles.infotext}> {props.date}</Text>
      </Text>

      <Text style={styles.infotitle}>Delivery:
        <Text style={styles.infotext}> {props.delivery}</Text>
      </Text>

      <Text style={styles.infotitle}>Seller:
        <Text style={styles.infotext}> {props.seller}</Text>
      </Text>

      <Text style={styles.infotitle}>Contact info:
        <Text style={styles.infotext}> {props.contact}</Text>
      </Text>
      <Text style={styles.infotitle}>Photos:</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', width: '90%' }}>
        <Image source={gallery} style={{
          resizeMode: 'contain',
          height: 80,
          width: '20%',
        }}></Image>
        <Image source={gallery} style={{
          resizeMode: 'contain',
          height: 80,
          width: '20%',
        }}></Image>
        <Image source={gallery} style={{
          resizeMode: 'contain',
          height: 80,
          width: '20%',
        }}></Image>

      </View>

    </View>
  )
}

/*
      <View style={{ marginTop: 10,  alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '90%'}}>
        <Button title="Delete"/>
        <Button title="Edit"/>
      </View>


*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    borderWidth: 1,
    width: '90%',
    padding: 5,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10
  },
  infotitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  infotext: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 16
  }
})


export default Posting
