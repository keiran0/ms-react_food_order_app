import { useRef, forwardRef, useImperativeHandle} from 'react'

import CartItem from './CartItem';

const Cart = forwardRef(function Cart({cart}, ref){

    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open: ()=>{
                dialog.current.showModal();
            }
        }
    })

    return(
        <dialog className="cart" ref={dialog}>
            <h2>Your Cart</h2>
            <ul>
                {cart.map((cartItem)=><CartItem name={cartItem.name} quantity={cartItem.quantity}/>)}
            </ul>
        </dialog>
    )
})

export default Cart;