import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import complaintsReducer from './store/reducers/complaints';
import authReducer from './store/reducers/auth';
import eventsReducer from './store/reducers/events';
import permitsReducer from './store/reducers/permit';
import usercomplaintsReducer from './store/reducers/userComplaint';
import userDocumentsReducer from './store/reducers/userDocument';
import userLoginReducer from './store/reducers/userLogin';
import userPermitsReducer from './store/reducers/userPermit';
import userRegisterReducer from './store/reducers/userRegister';
import documentsReducer from './store/reducers/document';
import App from './App';
import { ThemeProvider, StyleReset } from 'atomize';
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  complaint: complaintsReducer,
  events: eventsReducer,
  permits: permitsReducer,
  usercomplaint: usercomplaintsReducer,
  userdocument: userDocumentsReducer,
  userlogin: userLoginReducer,
  userpermit: userPermitsReducer,
  userregister: userRegisterReducer,
  document: documentsReducer

});
const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
const app = (
 
  <Provider store={store}>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <StyleReset />
      <App />
  </ThemeProvider>
  </BrowserRouter>
  </Provider>

);
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
