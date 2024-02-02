import React, { useState } from 'react';
import {  Box, Pressable, FlatList, Text  } from "native-base";
import { Feather } from '@expo/vector-icons'

export default function Home(){

  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ])

  return (
    <Box flex={1} safeArea backgroundColor="#fafafa" paddingY={14}> 
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" paddingX={5}>
      <Text fontSize={24}>Lista de produtos</Text>
      <Pressable alignItems="center" >
          <Box alignItems="center" backgroundColor="#FC0303" justifyContent="center"
          w={5} h={5} borderRadius={10} position="absolute" zIndex={99}
          bottom={-2} left={-4} fontSize={11}
          >
            99
            </Box>
          <Box>
            <Feather 
            name='shopping-cart'
            size={35}
            color="#000"
            />
          </Box>
      </Pressable>
      </Box>  
    </Box>
  );

}

