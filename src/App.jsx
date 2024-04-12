import React from "react";
import Header from "./Components/Header";
import Heroes from "./Components/Heroes";
import "./Components/Style/main.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App(){
    return <div className="main-custom-container">
      <Header/>
      <Heroes/>
    </div>
}

export default App;