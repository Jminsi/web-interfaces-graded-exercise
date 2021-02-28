import React, { useState } from 'react'
import { ScrollView, View, Text  } from 'react-native'
import Posting from './Posting';
import axios from 'axios';

const PostingsView = (props) => {

  const [postings, setPostings] = useState("");

  const postingss = [
    {
      id: 1,
      title: "Old Toyota Corolla1",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 2,
      title: "Old Toyota Corolla2",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 3,
      title: "Old Toyota Corolla3",
      description: "Long description here",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 4,
      title: "Old Toyota Corolla4",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 5,
      title: "Old Toyota Corolla5",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    },
    {
      id: 6,
      title: "Old Toyota Corolla6",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    }


  ];




  const postings2 = [
    {
      id: 1,
      title: "Old Toyota Corolla1",
      description: "Selling my Toyota Corolla Le, with only 90k original miles and Clean Title, never been any accidents, garage keeping.",
      category: "cars",
      location: "Oulu",
      images: "no",
      price: "123",
      date: "27.02.2021 15:42",
      delivery: "pickup",
      seller: "Jack",
      contact: "abc@zfsd.com / 050 123 123 123"
    }]

    //postings3 = []

    axios({
      method: 'get',
      url: 'http://192.168.1.26:4000/dogs'
      })
      .then(response => {
          //handle success
          //alert("Image upload completed");
          //this.setState({ isSubmitting: false })
          //postings3 = response.data;
          //console.log(response);
          console.log("get http://192.168.1.26:4000/dogs");
          setPostings(response.data)
      })
      .catch(response => {
          //handle error
          console.log(response);
          alert("Failed to get postings!");
      });

  return (
      <View style={{ flex: 1, backgroundColor: '#ccd5ae'}}>
      <ScrollView persistentScrollbar={true}    contentContainerStyle={{alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Postings</Text>
        { postings.map(p => <Posting {...p} key={p.id}></Posting>) }
      </ScrollView>
    </View>
  )
}

export default PostingsView
