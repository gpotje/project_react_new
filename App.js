/**
criar com expo 
npx create-expo expo-app
npx expo start
yarn add expo

asyncStore(cache)
npx expo install @react-native-async-storage/async-storage

axios
npm install axios --save


navigation
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-navigation/native-stack

firebase
npx expo install firebase
 */


import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';


export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}> Ola mundo </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#00aeef'
    },
    texto:{
      fontSize:50
    }
  
});

