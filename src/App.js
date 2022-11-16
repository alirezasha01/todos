import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import ItemList from "./components/itemList/ItemList";
class App extends React.Component{

    changeValueHandler = (event) => {
        this.setState({
                texts:[
                    {text : event.target.value}
                ]}
        )
    }
    render(){
        return(
            <div className="center">
                <h1>Todos List</h1>
                <input type="text" className="input" placeholder="Todos"></input>
                <button className="button" onClick={this.changeValueHandler}>Save</button>
                <ItemList
                text = {this.state.texts[0].text} 
                />
            </div>
        )
    }
}

export default App;