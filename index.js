import React from "react"
import NavBar from "./components/NavBar.js"
import Main from "./components/Main.js"
import ReactDOM from "react-dom/client.js"


function App(){
   return (<div>
    <NavBar />
    <Main />
   </div>)
}
ReactDOM.render(<App />,document.getElementById("root"));
