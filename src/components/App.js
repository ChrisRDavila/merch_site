import React from 'react';
import NavBar from './Header.js';
import CartControl from './CartControl.js';
import '../App.css';


function App(){
  return ( 
    <React.Fragment>
        {/* <h1>Epichorus Merch Site</h1> */}
      <NavBar />
      <CartControl />
      
      
    </React.Fragment>
  );
}

export default App;
