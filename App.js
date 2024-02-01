import React, { Component } from 'react';
import { NativeBaseProvider, Box,  } from "native-base";
import { 
View, 
StyleSheet
} from 'react-native';
import Cart from './src/pages/Cart';
import Home from './src/pages/Home';


export default function App(){
  return (
    <View style={styles.container}>
        <NativeBaseProvider>
        <Home></Home>
        </NativeBaseProvider>
    </View>
  );

}

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    marginTop:50,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor: '#00aeef'
  },

});
