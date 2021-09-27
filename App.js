import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
// import { StyleSheet, Text,View, SafeAreaView, Button } from 'react-native';

const App=()=>{
      fetch('https://edifiapi.enseval.com/edifi/testimoni')
      .then(function(resp){
        return resp.text();
      })
      .then(function(data){
        let parser = new Parser(),
        xmlDoc = parser.parseFromString(data,'text.xml');
        console.log(xmlDoc.getElementByTagName('Gender'));
      })
    }

    export default App;
// const styles = StyleSheet.create({
//   button:{
//     position: 'absolute',
//     top: 220,
//     left: 200
//   },
//   container: {

//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });
