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

import React, { useState,useEffect} from 'react';
import { 
 View, 
 Text,
  StyleSheet,
  Button,
} from 'react-native';
import firebase from './src/firebaseConnection';



export default function App() {




  const [nome, setNome] = useState('Carregando...')


  async function cadastro(){

    await firebase.auth().createUserWithEmailAndPassword("teste@gmail.com","123456")
    .then((value) => {
        alert('Usuario criado');
    }).catch((error)=>{
        if(error.code == 'auth/weak-password'){
          alert('Sua senha de ter pelo menos 6 caracteres');
          return;
        }
        if(error.code == 'auth/invalid-email'){
          alert('Email ionvalido');
          return;
        }else{
          alert('Ops algo deu errado');
          return;
        }
    })
  }



  useEffect(()=>{

    async function dados(){

      await firebase.database().ref('/user/1/nome').once('value',(snapshot)=>{
          setNome(snapshot.val());
          console.log('User data: ', snapshot.val());
      });

    }

    dados();
  },[]);
 
    return(
      
      <View  style={styles.container}>
         
           <Text>Olá {nome}</Text>

           <Button onPress={cadastro} />
           
      </View>
       
     
    );
        
        
  
}

const styles = StyleSheet.create({
  
    container:{
      flex:1,
    
      marginTop:10,
      justifyContent:"center",

    },
  
});

