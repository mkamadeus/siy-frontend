import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { loginByTokenAction } from './store/actions';
import './styles/index.css';

// Initial loading
// eslint-disable-next-line @typescript-eslint/no-explicit-any
store.dispatch<any>(loginByTokenAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
