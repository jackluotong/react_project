import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Show from './Page/TestOne/TestOne'
import TestTwo from './Page/TestOne/TestTwo'
/* 
 import Antd from 'ant-design'
 React.use(Antd)
 if you want to use antd in whole project.
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Show />
    <TestTwo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
reportWebVitals(console.log);