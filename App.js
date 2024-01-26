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

