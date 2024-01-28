import React from "react";
import {  Box, Image, Heading, Text, Icon } from "native-base";

import { Feather } from '@expo/vector-icons';

export default function Feed({data}) {
  return (
   <Box flex={1}
   flexDirection="column"
   marginBottom={4} 
   backgroundColor="FFF"
   padding={2}>
        <Box>
            <Image
            source={{uri: data.avatarUrl}}
            alt="post feed"
            w="100%"
            h={120}
            />
        </Box>
        <Box marginY={3}>
            <Heading size="sm" paddingBottom={1}>create by Gabriel Potje</Heading>
            <Text numberOfLines={2}>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</Text>
        </Box>
        <Box marginY={1}
        flexDirection="row"
        
        >

            <Icon 
            
            as={Feather}
            name="user"
            size={5}
            color="#000"
            
            />

          <Text >{data.fullName}</Text>
        </Box>
   </Box>
  );
}