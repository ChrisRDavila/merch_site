import React from 'react';
import NavBar from './Header.js';
import CartControl from './CartControl.js';
import '../App.css';


function App(){
  
  return ( 
    <React.Fragment>
      <NavBar />
      <CartControl />
    </React.Fragment>
  );
}

export default App;
