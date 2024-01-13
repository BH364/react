import React from "react";
import NavBar from "./src/assets/Components/NavBar.js";
import Main from "./src/assets/Components/Main.js";
import ReactDOM from "react-dom";


function App(){
   return (<div>
    <NavBar />
    <Main />
   </div>);
}
ReactDOM.render(<App />,document.getElementById("root"));
