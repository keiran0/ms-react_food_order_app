export default function CartItem({name, quantity, price, id, handleIncreaseQuantity, handleDecreaseQuantity}){

    function increase(){
        handleIncreaseQuantity({name, quantity, price, id})
    }

    function decrease(){
        handleDecreaseQuantity({name, quantity, price, id})
    }


    return(
        <div className="cart-item">
            <p>{name} - {quantity} x ${price}</p>
            <div className="cart-item-actions">
                <button onClick={decrease}>-</button>
                <p>{quantity}</p>
                <button onClick={increase}>+</button>
            </div>
        </div>
        
    )
}