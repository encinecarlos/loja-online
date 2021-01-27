import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Base from "./components/Base";
import Cart from '../src/components/Cart'
import Routes from "./routes";

import Swal from 'sweetalert2';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function endShop() {
    setCartItems([]);
    setTotalPrice(0);

    Swal.fire({
      title: 'Obrigado pela compra!',
      text: `Você ganhou cashback: R$${Math.round(0.03 * totalPrice)},00 (5%)`,
      icon: 'success',
      confirmButtonText: 'Comprar mais'
    })
  }

  function showCart(cartItems, totalPrice) {
    return (
      <Cart cartItems={cartItems} totalPrice={totalPrice} endShop={endShop} />
    )
  }

  function addProductToCart(currentProduct) {
    setCartItems([...cartItems, currentProduct]);
    setTotalPrice(totalPrice + currentProduct.order);
  }  


  return (
    <Base>
      <Header />      
      <Routes />
      {showCart(cartItems, totalPrice)}
    </Base>
  );
}

export default App;
