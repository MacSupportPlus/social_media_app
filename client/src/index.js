import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk"
import {Provider} from 'react-redux';
import reducer from './reducers';
import Home from "./pages/home/Home";
import App from "./App"
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const saveToLocalStorage = (reduxGlobalState) => {
  
  // serialization = converting js object to a string

  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  
  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);
  }
}
const middleware = [thunk];

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()    
));


  

store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile/:username" component={Profile} />
            </Switch>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);