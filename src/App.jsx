import React from "react";
import Table from "./Components/Table";
import Header from "./Components/Header";
import Heroes from "./Components/Heroes";
import "./Components/Style/main.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App(){
    return <div className="main-custom-container">
      <Header/>
      <Heroes/>
      <Table/>
    </div>
}

export default App;