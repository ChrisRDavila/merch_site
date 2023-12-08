import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App"
import reportWebVitals from './reportWebVitals';
import background from '../src/img/bGround.jpg';

const defaultStyle = {
  backgroundImage: `url(${background})`,
  color: "#FFFC00",
  fontFamily: ['Deborah Fancy Dress', "sans-serif"],
  fontSize: "150%"

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <link href="https://fonts.cdnfonts.com/css/deborah-fancy-dress" rel="stylesheet"></link>
      <div className="background" style={defaultStyle}>
    <App />
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
