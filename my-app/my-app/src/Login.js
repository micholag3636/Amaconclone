import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./Login.css"
import { connect } from "react-redux"
import { changeToTrue }  from "./index.js"


function Login(props) {
    return (
        
        
        <div>
            <div>
      
      <div className="MainForm">
       



        <img  className="thelogoimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"/>








    <form  onSubmit={() => {props.changeToTrue()}} id="lFormBox" >

      <h1 id="themainh1">Sign-In</h1>
      


      <div>
        <label htmlFor="email">Email</label>
        <input name="email" ></input>
    
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password"></input>
        
      </div>
      <button className="btnform" type="submit">Sign-In</button>
      

     


     <h5 id="sp">New to Amazon?</h5>
    <button id="regb"className="btnform" type="submit">Create Your Amazon Account</button>
     
    </form>
  
    </div>
    </div>

             

            




          
        </div>
       
        
    )



}


const mapDispatchToProps = (dispatch) => {
    return {
  
      changeToTrue: () => {dispatch({type: "LOGGEDIN"})}
     
  
     
     
    }
  }
  
  

export default connect(null,mapDispatchToProps)(Login)
