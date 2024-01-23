/**
criar com expo 
npx create-expo expo-app
npx expo start
yarn add expo

 */


import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';


class App extends Component{

  render(){
    return(
      <View style={styles.container}>

        <Text>Ola mundo</Text>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#00aeef'
    },
  
});

export default App;