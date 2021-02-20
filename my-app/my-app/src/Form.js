import React, {Component, useEffect} from 'react'
import { Field, reduxForm } from 'redux-form'
import axios from "axios"
import "./Form.css"
import { connect } from "react-redux"
import { changeToTrue }  from "./index.js"
import { render } from 'react-dom'
import {Link} from "react-router-dom"











function Form(props){


function submit(event){
  
  const registered = {
    firstname: event.firstname,
    lastname: event.lastname,
    email: event.email,
    password: event.password
  }

 
  axios.post("http://localhost:5000/app/signup", registered)
  .then(response =>  props.changeToTrue())

 



}







  




  return (

    <div>
      
      <div className="MainForm">
       



        <img  className="thelogoimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"/>








    <form  className="FormBox" onSubmit={props.handleSubmit(submit)} >

      <h1 classname="themainh1">Create account</h1>
      


      <div>
        <label htmlFor="firstname">First Name</label>
        <Field name="firstname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <Field name="lastname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
    <button className="btnform" type="submit">Create Your Amazon account</button>
      
      
      
      <p>Already have an account? <a href={"/Login"}>Sign In</a></p>
    </form>
  
    </div>
    </div>
  )
}







const mapDispatchToProps = (dispatch) => {
  return {

    changeToTrue: () => {dispatch({type: "LOGGEDIN"})}
   

   
   
  }
}







Form = reduxForm({
  // a unique name for the form
  form: 'contact'
})(Form)


export default connect(null, mapDispatchToProps)(Form)


















