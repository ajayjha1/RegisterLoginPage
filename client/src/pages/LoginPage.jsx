import React from 'react'
import { userLogin } from '../functions/apiCalls';

export const LoginPage = ({ onLogin }) => {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitLogin = (email, password) => {
    const userLoginData = {email, password}
    userLogin(userLoginData)
    .then(()=>{
      console.log("Logged in Succesfully")
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '10%'}} >
      <form style={{maxWidth: '60%'}} >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <br/>
        <button onClick={() => submitLogin(email, password)} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
