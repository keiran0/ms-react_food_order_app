import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import { useState, useRef } from 'react'

function App() {

  const [cart, setCart] = useState([])
  const cartRef = useRef();
  const checkoutRef = useRef();

  function addToCart({name, price, id}){
    if (cart.filter((item)=> item.name == name).length == 0){ //item does not exist
      setCart([...cart, {name, quantity: 1, id, price}])
    } else {
      let ind = cart.findIndex((item)=>item.name == name)
      setCart([...cart.filter((item)=>item.name !== name), {name, quantity: cart[ind].quantity + 1, id, price}])
    }
  }

  function increaseQuantity({name, quantity, price, id}){
    setCart([...cart.filter((item)=> item.name !== name), {name, quantity: quantity+1, price, id}])
  }

  function decreaseQuantity({name, quantity, price, id}){
    if (quantity == 1) {
      setCart([...cart.filter((item)=> item.name !== name)])
    } else {
      setCart([...cart.filter((item)=> item.name !== name), {name, quantity: quantity-1, price, id}])
    }
  }

  return (
    <>
      <Header showModal={()=>{cartRef.current.open()}} cart={cart}/>
      <Meals addToCart={addToCart}/>
      <Cart ref={cartRef} cart={cart} checkoutHandler={()=>{checkoutRef.current.open()}} handleIncreaseQuantity={increaseQuantity} handleDecreaseQuantity={decreaseQuantity}/>
      <Checkout cart={cart} ref={checkoutRef}/>
    </>
  );
}

export default App;
