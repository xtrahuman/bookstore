import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BookContainer from './components/BookContainer';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BookContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
