import React from "react";
import "./ItemList.css"

const ItemList = (props) =>{
    return(
        <div>
            <hr/>
        <div className="divtodo">
            <div></div>
            <div>
            <p className="text">{props.text}</p>
            </div>
            <div>
            <button className="buttonDelete">Delete</button>
            </div>
            <div></div>
        </div>
        </div>
    )
}

export default ItemList;