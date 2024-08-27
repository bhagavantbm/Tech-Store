// src/components/ShoppingCart.tsx
import { Button, Paper } from '@mui/material';
import * as React from 'react';

import { Link } from 'react-router-dom';


interface Item {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Item {
  quantity: number;
}

const sampleItems: Item[] = [
  { id: 1, name: 'Computer', price: 80000 },
  { id: 2, name: 'Mobile', price: 25000 },
  { id: 3, name: 'Accesaries', price: 50000 },
  {id:4,name:'Ear-phones',price:1100},
  {id: 5, name: 'Smart-watch', price: 2500 },
  {id: 6, name: 'Smart-TV', price: 18000 }
];


 export const Mycart = () => {
    const url='https://play.google.com/store/apps/details?id=com.phonepe.app&hl=en_IN&gl=US&shortlink=2kk1w03o&c=consumer_app_icon&pid=PPWeb_app_download_page&af_xp=custom&source_caller=ui'
   

  const [cart, setCart] = React.useState<CartItem[]>([]);
  
  const addItemToCart = (item: Item) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (itemIndex > -1) {
        // Item already in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }
      // Item not in cart, add new item with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromCart = (itemId: number) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === itemId);
      if (itemIndex > -1) {
        if (prevCart[itemIndex].quantity > 1) {
          // Decrease quantity if more than 1
          const updatedCart = [...prevCart];
          updatedCart[itemIndex].quantity -= 1;
          return updatedCart;
        } else {
          // Remove item if quantity is 1
          return prevCart.filter(cartItem => cartItem.id !== itemId);
        }
      }
      return prevCart;
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    
    <div style={{ maxWidth: '500px', margin: 'auto',fontSize:'30px',backgroundColor:'lightgrey',marginTop:'10px',marginBottom:'-50px',borderRadius:'50px'}}>
      <h2 style={{marginBottom:'20px',marginTop:'5px',color:'crimson',marginLeft:'80px'}}>Shopping Cart</h2>
      <div>
        {sampleItems.map(item => (
          <div key={item.id} style={{ marginBottom: '10px',marginLeft:'10px' }}>
            <span>{item.name}   - Rs..{item.price.toFixed(2)}</span>
            <button  onClick={() => addItemToCart(item)} style={{ marginLeft: '30px' ,fontSize:'20px',marginBottom:'20px'}}>Add to Cart</button>
            
          </div>
        ))}
      </div>
      <h3 style={{marginBottom:'5px',marginTop:'10px',marginLeft:'130px'}}>Cart Items</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Rs..{item.price.toFixed(2)} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 style={{color:'steelblue',marginLeft:'50px',marginTop:'-10px',marginBottom:'-10px'}}>Total: Rs..{getTotal().toFixed(2)}</h3>
      <center>
      <Link to ={url}>
     
      <Button variant="contained" style={{marginTop:'20px'}}>Pay-now</Button></Link>
      </center>
    </div>
  );
};

