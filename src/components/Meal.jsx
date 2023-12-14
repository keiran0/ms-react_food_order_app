export default function Meal({name, price, description, image, handleAddToCart, id}){

    function addItem(){
        handleAddToCart({name, price, id})
    }

    return(
        <div className="meal-item">
            <img src={`http://localhost:3000/${image}`}></img>
            <h3>{name}</h3>
            <div className="meal-item-price">${price}</div>
            <p className="meal-item-description">{description}</p>
            <button className="meal-item-actions button" onClick={addItem}>Add To Cart</button>
        </div>
    )
}