import React, { Component } from 'react';
import { NativeBaseProvider, Box,  } from "native-base";
import { 
View, 
StyleSheet
} from 'react-native';


export default function App(){
  return (
    <View style={styles.container}>
        <NativeBaseProvider>
          <Box>Hello world</Box>
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
