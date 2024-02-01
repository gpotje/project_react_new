import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from "native-base";

import Routes from './src/routes/index';


export default function App(){
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto"/>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );

}