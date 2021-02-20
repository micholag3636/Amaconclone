import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux" 
import { reducer as formReducer } from 'redux-form'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const isLoggedIn = false


export const changeToTrue = () => {
  return {
  type: "LOGGEDIN"
  }
 
}

export const changeToFalse = () => {
  return {
  type: "LOGGEDOUT"
  }
}

const change = (state = isLoggedIn,action) =>{

  switch(action.type){

    case "LOGGEDIN": 
    return state = true


    case "LOGGEDOUT":
      return state = false
      

      default: 
      return state = state




  }



}

 



const combined = combineReducers({
  form: formReducer,
  change: change
 

})



let store = createStore(combined /*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/)












ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />


    </Provider>

  
  </React.StrictMode>,
  document.getElementById('root')
);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
