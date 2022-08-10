import React from "react";
import ReactDom from "react-dom";
import "./App.css";
class App extends React.Component{
    render(){
        return(
            <div className="center">
                <h1>Todos List</h1>
                <input type="text" className="input" placeholder="Todos"></input>
                <button type="submit" className="button">Save</button>
            </div>
        )
    }
}

export default App;