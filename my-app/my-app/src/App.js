
import './App.css';
import NavBar from "./NavBar.js"
import Main from "./Main.js"
import Form from "./Form.js"
import { connect } from "react-redux"
import React, {Component} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./Login.js"
import {Link} from "react-router-dom"



 
class App extends Component {

  

  
  
render(){
  const isLoggedIn = this.props.change


  return (
    <Router>

      <Switch>
   
   <div className="App">

  {!isLoggedIn? (
      <div className="Login">
      
      
      
      
      
    
    

  
      <Form />
     </div>
      
     ) : ( 
        <div>
          

           
    
        
            <NavBar/>
            <Main />





         

          

          </div>
    )}

    <Route path={"/Login"} component={Login} />

    </div>
    
      
    
</Switch>
</Router>
  );

     }
  }
  const mapStateToProps = state => {
    return {
      change: state.change
    }
  }

  
  





export default connect(mapStateToProps)(App)
