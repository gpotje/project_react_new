import {useContext} from 'react';
import { FlatList, Box,Text  } from "native-base";
import { CartContext } from '../../context/CartContext'
import CartItem from '../../component/CartItem';


export default function Cart(){

  const {cart, addItemCart } = useContext(CartContext)

  return (
    <Box flex={1} paddingY={5} paddingX={5} background="#fafafa" > 
      
     <FlatList
      data={cart}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => (
        <CartItem  data={item}/>
      )}
     />


    </Box>
  );

}

