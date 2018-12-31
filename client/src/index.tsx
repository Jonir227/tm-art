import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './FontAwesome';
import configureStore from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
