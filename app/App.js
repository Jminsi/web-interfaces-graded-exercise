import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigationDemo from './components/TabNavigation';



export default function App() {

  let output;



   output = (
     <View style={ styles.container }>
       <TabNavigationDemo></TabNavigationDemo>
     </View>);



  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18
  },
});
