/**
criar com expo 
npx create-expo expo-app
npx expo start
yarn add expo
npx expo install firebase
https://docs.nativebase.io/input
npm install native-base
import { NativeBaseProvider, Box } from "native-base";
 */

import React, { Component } from 'react';
import { 
 View, 
 Text,
  StyleSheet,
} from 'react-native';



class App extends Component{

  render(){
    return(
      
      <View  style={styles.container}>
         
           <Text>Olá mundo</Text>
              
        

      </View>
       
     
    );
        
        
  }
}

const styles = StyleSheet.create({
  
    container:{
      flex:1,
    
      marginTop:10,
      justifyContent:"center",

    },
  
});

export default App;