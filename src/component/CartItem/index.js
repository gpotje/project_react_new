import React, { Component, useState } from 'react';
import {  Box,Button, Text } from "native-base";

export default function CartItem({data}){

    const [amount,setAmount] = useState(data?.amount)

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
        <Box flexDirection="row" justifyContent="space-between" justifyItems="center">
          <Button backgroundColor="#168fff" paddingRight={2}> +</Button>

          <Text paddingX={2} fontSize={20} fontWeight={'bold'} >{amount}</Text>

          <Button backgroundColor="#168fff" >-</Button>
        </Box>
    </Box>
    
    
  );

}
