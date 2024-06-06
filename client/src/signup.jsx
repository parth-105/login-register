import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [pass,setPass] = useState()

  const handelsubmit =   (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/register',{name,email,pass})
    .then(result =>console.log(result))
    .catch(err=>console.log(err))

  }
  return (
    <div> 
      <div>
        <form  onSubmit={handelsubmit} >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
              onChange={(e)=>setEmail(e.target.value)}
            />
           
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 mt-3">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"
             onChange={(e)=>setPass(e.target.value)}
              />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1 mt-3">name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="name" 
             onChange={(e)=>setName(e.target.value)}/>
          </div>

          <button type="submit" className="btn btn-primary">register</button>

          <p>already have account</p>
          <Link to="/login" className="btn btn-primary">login</Link>

        </form>
      </div>
    </div>
  )
}


export default Signup;