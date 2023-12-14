import { useRef } from 'react'

export default function Checkout({cart}) {

    const dialog = useRef();

    function closeModal(){
        dialog.current.close()
    }

    let total_price = 0
    cart.forEach(function(item){
        total_price += item.price * item.quantity
    })

    return (
        <dialog className="modal" id="checkout" ref={dialog}>
            <h2>Checkout</h2>
            <p>Total Amount:{total_price}</p>
            <div className="control">
                <label className="control">Full Name</label>
                <input className="control"></input>
                <label className="control" type="email">E-Mail Address</label>
                <input className="control"></input>
                <label className="control">Street</label>
                <input className="control"></input>
                <div className="control-row">
                    <label className="control">Postal Code</label>
                    <input className="control"></input>
                    <label className="control">City</label>
                    <input className="control"></input>
                </div>
            </div>
            <div className="modal-actions">
                <button className="text-button" onClick={closeModal}>Close</button>
                <button className="button">Submit Order</button>
            </div>
        </dialog>
    )
}