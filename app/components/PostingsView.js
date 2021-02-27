import React from 'react'
import { ScrollView, View, Text  } from 'react-native'
import Posting from './Posting';

const PostingsView = (props) => {

  const postings = [
    {
      id: 1,
      title: "Old Toyota Corolla1",
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
      id: 2,
      title: "Old Toyota Corolla2",
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
      id: 5,
      title: "Old Toyota Corolla5",
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
      id: 6,
      title: "Old Toyota Corolla6",
      description: "Long description here",
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


  return (
      <View style={{ flex: 1}}>
      <ScrollView persistentScrollbar={true}    contentContainerStyle={{alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Postings</Text>
        { postings.map(p => <Posting {...p} key={p.id}></Posting>) }
      </ScrollView>
    </View>
  )
}

export default PostingsView
