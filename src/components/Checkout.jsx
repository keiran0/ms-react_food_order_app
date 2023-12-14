import { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'


const Checkout = forwardRef(function Checkout({ cart }, ref) {

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

    //function initially not included in my code, take note when submitting to backend.
    function handleSubmit(event) {
        event.preventDefault()
        console.log(cart)

        const fd = new FormData(event.target)
        console.log(fd)
        const customerData = Object.fromEntries(fd.entries())

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cart,
                    customer: customerData
                }
            })
        })


    }

    return (createPortal(<dialog className="modal" id="checkout" ref={dialog}>


        <form className="control" method="post" onSubmit={(event)=>handleSubmit(event)}>
            <h2>Checkout</h2>
            <p>Total Amount: ${total_price.toFixed(2)}</p>
            <label className="control">Full Name</label>
            <input className="control" name='name'></input>
            <label className="control">E-Mail Address</label>
            <input className="control" name="email"></input>
            <label className="control">Street</label>
            <input className="control" name="street"></input>
            <div className="control-row">
                <label className="control">Postal Code</label>
                <input className="control" name="postal-code"></input>
                <label className="control">City</label>
                <input className="control" name="city"></input>
            </div>
            <p className="modal-actions">
                <button className="text-button" type="button" onClick={closeModal}>Close</button>
                <button className="button">Submit Order</button>
            </p>
        </form>


    </dialog>, document.getElementById('modal'))

    )
})

export default Checkout