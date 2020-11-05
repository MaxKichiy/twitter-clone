import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import {BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from './store/store';



ReactDOM.render(
  <Router>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider></Router>,
  document.getElementById('root')
);

