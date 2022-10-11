import React from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {emailSignup,passwordSignup,conPassword} from "../Reducer"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'




 function Signup(props) {
  
   const navigate=useNavigate()
     const userSignup= async (e)=>{
        e.preventDefault()
        if(props.signPass!== props.conPass) return 
        try{
         const user =await createUserWithEmailAndPassword(auth,props.signMail,props.signPass)
   
           navigate("/login")
           e.target.reset()
        } catch(err){
            console.log(err.message)
        }
     
     }

  return (
    <div className='login-div'>
    <div className="backdrop">
        <div className='login'>
            <div>
                <h2>SignUp</h2>
                <p>Let us handle your finances !</p>
            </div>
            <hr />
            <form onSubmit={(e)=>{userSignup(e)}} action="">
                <div className='form-input'>
                    <label htmlFor="">Email*</label> <br />
                    <input type="email" name="" id="email" placeholder= "What's your email?" required onChange={(e)=>{props.emailSignup(e.target.value)}} /><br /><br />
                    <label htmlFor="">Password*</label><br />
                    <input type="password" name="" id="password" placeholder= "Please create a password" required onChange={(e)=>{props.passwordSignup(e.target.value)}}/><br /><br />
                    <label htmlFor="">Confirm Password*</label><br />
                    <input type="password" name="" id="conpassword" placeholder= "Please confirm your password" required onChange={(e)=>{props.conPassword(e.target.value)}} />
                </div>
              
                <input type="submit" value="SignUp" />
            </form>
            <p className='register-p'>Already have an account? <Link to="/login">Login Now</Link> </p>
        </div>
    </div>
</div>
  )
}
function mapStateToProps(gloabalstate){
    return gloabalstate
   
  }
  
  const  mapdispatchtoprops={
     emailSignup,passwordSignup,conPassword
  }
  

export default connect(mapStateToProps,mapdispatchtoprops)(Signup) 