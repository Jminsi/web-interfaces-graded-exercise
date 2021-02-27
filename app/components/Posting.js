import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Posting = (props) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.infotitle}>Category:
        <Text style={styles.infotext}> {props.category}</Text>
      </Text>
      
      <Text style={styles.title}>{props.title}</Text>
      
      <Text style={styles.description}>{props.description}</Text>
      
      <Text style={styles.infotitle}>Price (eur):
        <Text style={styles.infotext}> {props.price}</Text>
      </Text>
      
      <Text style={styles.infotitle}>Location:
        <Text style={styles.infotext}> {props.location}</Text>
      </Text>

      <Text style={styles.infotitle}>Posted/edited:
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
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    borderWidth: 1,
    width: '90%',
    padding: 5

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
  },




  songArtistName: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10

  },
  coverImage: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  songName: {
    color: 'white',
    fontSize: 16
  }
})

export default Posting
