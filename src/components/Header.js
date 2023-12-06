import React from "react";
import Widget from "./Widget";
import "../App.css";

function Header(){
  return ( 
    <React.Fragment>
      <div className="navBarItem" id="navBarGreeting">
        <h1>Welcome to <br />Epichorus Merch Site!!</h1>
      </div>
    </React.Fragment>
  );
}


export default Header;