import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import lightspeedstockvid from '../src/animations/lightspeedstockvid.mp4';

class Index extends React.Component {
  render(){
    return(
      <video autoPlay loop  id="backgroundVid">
    <source src={lightspeedstockvid} type="video/mp4"></source>
  </video>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Index />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
