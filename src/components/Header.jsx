export default function Header({showModal, cart}){

    function clickCart(){
        showModal()
    }

    let total_quantity = 0
    cart.forEach(function(item){
        total_quantity += item.quantity
    })

    return(
        <div id="main-header">
            <div id="title">
                <h1>REACTFOOD</h1>
                <img src="../logo.jpg"></img>
            </div>

            <button className="text-button" onClick={clickCart}>Cart ({total_quantity})</button>

            
        </div>
    )
}