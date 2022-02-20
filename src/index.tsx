import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReportHandler } from 'web-vitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(onPerfEntry as ReportHandler);
function onPerfEntry(onPerfEntry: any, ReportHandler: any) {
  throw new Error('Function not implemented.');
}

