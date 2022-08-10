import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import ItemList from "./components/itemList/ItemList";
class App extends React.Component{
    render(){
        return(
            <div className="center">
                <h1>Todos List</h1>
                <input type="text" className="input" placeholder="Todos"></input>
                <button type="submit" className="button">Save</button>
                <ItemList />
                <ItemList />
                <ItemList />
                <ItemList />
            </div>
        )
    }
}

export default App;