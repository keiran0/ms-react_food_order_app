import { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'


const Checkout = forwardRef( function Checkout({ cart }, ref) {

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    })

    const dialog = useRef();

    function closeModal() {
        dialog.current.close()
    }

    let total_price = 0
    cart.forEach(function (item) {
        total_price += item.price * item.quantity
    })

    return (createPortal(<dialog className="modal" id="checkout" ref={dialog}>
        <h2>Checkout</h2>
        <p>Total Amount: ${total_price.toFixed(2)}</p>
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
    </dialog>, document.getElementById('modal'))

    )
})

export default Checkout