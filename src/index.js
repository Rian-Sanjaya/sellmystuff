import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { stat } from 'fs';

const LOAD_AUTH = 'LOAD_AUTH';
const LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS';
const LOAD_AUTH_FAIL = 'LOAD_AUTH_FAIL';
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const initialState = {
  loading: true,
  // status: null,
  // token: null,
  // authed: null,
  // dataUser: null,
  // error: []
};

// Reducer
function Auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: action.payload.loading,
        isAuthenticated: action.payload.isAuthenticated
      };

    case 'LOAD_AUTH_SUCCESS':
      return {
        ...state,
        loading: action.payload.loading,
        isAuthenticated: action.payload.isAuthenticated
      }

      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          loading: action.payload.loading,
          isAuthenticated: action.payload.isAuthenticated
        }

    default:
      return state;
  }
}

// All Reducers
const allReducers = combineReducers({
  auth: Auth
});

const middleware = [thunk];

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
