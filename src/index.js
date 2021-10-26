import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import {Provider} from 'react-redux';
import App from './containers/Home';
import './index.css'
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store} >
   <App />
  </Provider>,
  document.getElementById('root')
);
