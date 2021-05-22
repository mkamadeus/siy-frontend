import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers';
import { initialAuthState } from './states';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  authReducer,
  initialAuthState,
  composeWithDevTools(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // applyMiddleware(thunk)
);
