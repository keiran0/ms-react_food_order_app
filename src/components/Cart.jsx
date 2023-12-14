import { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

import CartItem from './CartItem';

const Cart = forwardRef(function Cart({ cart, checkoutHandler, handleIncreaseQuantity, handleDecreaseQuantity }, ref) {

    let totalPrice = 0
    cart.forEach(function (item) {
        totalPrice += item.price * item.quantity
    })
    

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    })

    return (createPortal(<dialog className="modal" ref={dialog}>
        <h2>Your Cart</h2>
        {totalPrice == 0 ? <p>You have no items in your cart</p> : <>
            <ul>
                {cart.map((cartItem) => <CartItem name={cartItem.name} key={cartItem.id} id={cartItem.id} quantity={cartItem.quantity} price={cartItem.price} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity} />)}
            </ul>
            <div className="cart-total">
                {totalPrice.toFixed(2)}
            </div>
        </>}

        <div className="modal-actions">
            <button className="text-button" onClick={() => dialog.current.close()}>Close</button>
            {totalPrice !== 0 && <button className='button' onClick={checkoutHandler}>Go to Checkout</button>}
        </div>
    </dialog>, document.getElementById('modal'))

    )
})

export default Cart;