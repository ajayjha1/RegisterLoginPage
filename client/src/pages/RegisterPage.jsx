import React from 'react'
import { userRegister } from '../functions/apiCalls'

export const RegisterPage = () => {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const submitForm = (name, email, password) => {
    const userRegisterData = { name, email, password }
    userRegister(userRegisterData)
    .then(() => {
      console.log("logged in successfully")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '10%'}} >
      <form style={{maxWidth: '60%'}} >
        <div className='form-group' >
          <label>Enter Your Name</label>
          <input onChange={(e)=>setName(e.target.value)} type='text' className='form-control' placeholder='Enter name'></input>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary" onClick={() => submitForm(name, email, password)} >Submit</button>
      </form>
    </div>
  )
}
