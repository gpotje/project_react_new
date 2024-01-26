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
import { NativeBaseProvider, Box,Input,Stack,extendTheme } from "native-base";
import { 
 View, 
 Text,
  StyleSheet,
} from 'react-native';
import firebase from './src/fireBaseConnection';


class App extends Component{

  render(){
    return(
      
      <View  style={styles.container}>
          <NativeBaseProvider>
              <Stack direction="column" mb="" mt="1.5" space={3}>
                  <Input size="2xl" placeholder="2xl Input" />
              </Stack>
              <Box>
                óla mundo
              </Box>
              
          </NativeBaseProvider>
     

      </View>
       
     
    );
        
        
  }
}

const styles = StyleSheet.create({
  
    container:{
      flex:1,
      justifyContent:"center",
      marginTop:40

    },
  
});

export default App;