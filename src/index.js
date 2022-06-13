import React from 'react';
import {createRoot} from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
