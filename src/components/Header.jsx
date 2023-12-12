

export default function Header({showModal}){

    function clickCart(){
        showModal()
    }

    return(
        <div id="main-header">
            <div id="title">
                <h1>REACTFOOD</h1>
                <img src="../logo.jpg"></img>
            </div>
            <button onClick={clickCart}>Cart</button>
        </div>
    )
}