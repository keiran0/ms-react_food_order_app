import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";

import { useState, useRef } from 'react'

function App() {

  const [cart, setCart] = useState([])
  const cartRef = useRef();

  function addToCart(addedItem){
    if (cart.filter((item)=> item.name == addedItem).length == 0){ //item does not exist
      setCart([...cart, {name: addedItem, quantity: 1}])
    } else {
      let ind = cart.findIndex((item)=>item.name == addedItem)
      setCart([...cart.filter((item)=>item.name !== addedItem), {name: addedItem, quantity: cart[ind].quantity + 1}])
    }
  }

  function showModal(){
    console.log("modal opened")
    cartRef.current.open()
  }

  function deb(){
    console.log(cart)
  }

  return (
    <>
      <Header showModal={showModal}/>
      <Meals addToCart={addToCart}/>
      <Cart ref={cartRef} cart={cart}/>
      <button onClick={deb}></button>
    </>
  );
}

export default App;
