import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './App';
// import MapComponent from './components/MapComponent/MapComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <MapComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
