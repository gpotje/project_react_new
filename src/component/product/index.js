import React, { Component } from 'react';
import { Button, Box,  } from "native-base";
import { FontAwesome6  } from '@expo/vector-icons'



export default function Product({data, addToCart}){
  return (

    <Box borderWidth={1} borderRadius={2} w="90%"
      marginX={2} borderColor="#000"
      padding={2} flexDirection="row"
      alignItems="center" justifyContent="space-between"
      marginY={1}
      >

        <Box>
          <Box _text={{fontWeight:"bold"}}> {data.name}</Box>
          <Box flexDirection="row"> R$:{data.price}</Box>
        </Box>
        <Box>
          <Button backgroundColor="#168fff" paddingX={6}
          onPress={addToCart}
          >
            +
          </Button>
        </Box>
    </Box>

    
  );

}
