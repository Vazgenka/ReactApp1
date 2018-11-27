import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><Card img="https://www.cnews.cz/wp-content/uploads/2016/12/5/3/5/9/6///logo-hello-orkut-ico.png" title="Title" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia"/></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
