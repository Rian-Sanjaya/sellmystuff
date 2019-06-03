import { createStore, combineReducers,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { auth } from '../src/reducers/authReducer'

const allReducers = combineReducers({
    auth: auth
});

const middleware = [thunk];

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);