import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import HelloWorld from './tutorials/step1-helloworld/HelloWorld';
//import CustomText from './tutorials/step2-props/CustomText';
//import Greeter from './tutorials/step3-state-and-text-input/Greeter';
//import StyleDemo from './tutorials/step4-style/StyleDemo';
//import Dimensions from "./tutorials/step5-layout/1Dimensions";
//import FlexDirectionAndJustify from "./tutorials/step5-layout/2FlexDirectionAndJustify";
//import ImageDemo from './tutorials/step6-images/ImageDemo';
//import skier from './assets/cyprien-delaporte-xe46njOok-A-unsplash.jpg';
//import mountains  from './assets/alexandra-avelar-O6RLx-ECnSw-unsplash.jpg';
//import IconMix from './tutorials/step7-icons/IconMix';
//import SpotifyDemo from './components/spotify/SpotifyDemo';
//import StackNavigationDemo from './tutorials/step8-navigation/StackNavigation';
import TabNavigationDemo from './components/TabNavigation';
//import TabDataNavigation from './tutorials/step9a-navigation-with-data-props/TabDataNavigation';
//import ImagePickAndSend from './tutorials/step10-imagepicker-and-multipart-send/ImagePickAndSend';
//import AuthDemo from './tutorials/step11-jwt-auth/AuthDemo';

//import TestComponent from './components/TestComponent';
//import GreeterWithHooks from './tutorials/step3-state-and-text-input/GreeterWithHooks';

export default function App() {

  let output;
  // Steps 1-4
  /*
    <HelloWorld></HelloWorld>
      <CustomText value="This is data passed by props to the component"></CustomText>

      <StyleDemo></StyleDemo>
  */
  /*let demo = [];
  for(let i = 0; i < 10; i++) {
    demo.push(<TestComponent showThis={ i } otherProp={"Foo"}/>);
  }

*/
  /*output = (
    <View style={styles.container}>
      <Text>Hello</Text>
      <GreeterWithHooks />
    </View>
  );*/

  // Step 5 - Layout example 1
  //output = <Dimensions></Dimensions>;

  // Step 5 - Layout example 2
  //output = <FlexDirectionAndJustify></FlexDirectionAndJustify>;

  // Step 6 - Image example
  // output = (
  //   <View style={ styles.container }>
  //     <ImageDemo style={{ flex: 1}} text={"Hello"} image={ skier }></ImageDemo>
  //     <ImageDemo style={{ flex: 1}} text={"World"} image={ mountains }></ImageDemo>
  //   </View>
  // );

  // Step 7 - Icons example
  // output = (<View style={ styles.container }>
  //   <IconMix></IconMix>
  // </View>);


  // Spotify UI example
  //output = <SpotifyDemo></SpotifyDemo>

  // Step8 - Navigation Stack
  //  output = (
  //   <View style={ styles.container }>
  //     <StackNavigationDemo></StackNavigationDemo>
  //   </View>);

  // Step8 - Navigation Tab
   output = (
     <View style={ styles.container }>
       <TabNavigationDemo></TabNavigationDemo>
     </View>);

  // Step9 - Navigation with data and debugging
  // output = (
  //   <View style={ styles.container }>
  //     <TabDataNavigation></TabDataNavigation>
  //   </View>);

  // Step 10 - Image picker and multipart sending to server
  // For testing you can for example use https://github.com/lassehav-oamk/image-upload-example-server repository.
  // Recommend deploying that repository to heroku and then replace the targetURI with correct address

  //output = (
  //  <View style={ styles.container }>
  //    <ImagePickAndSend targetURI='https://image-upload-example-server.herokuapp.com/upload' imageFormName='image'></ImagePickAndSend>
  //  </View>);

  // Step 11 - Mobile client with JWT interacting with API
  // The API server intended to be used with this demo can be found from here
  // https://github.com/lassehav-oamk/api-authentications-demos
  // To test this you need to modify the targetURI below to match your machine IP.
  // You can see the IP of your machine for example in the metro server tab in browser, which opens
  // when you execute 'expo start' command.

  // output = (
  // <View style={ styles.container }>
  //   <AuthDemo apiURI='http://10.4.3.136:3000'></AuthDemo>
  // </View>)

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
