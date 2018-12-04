import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nim from './Nim';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Nim count="100"/>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
