import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthProvider/AuthPorvider';
import {useLocation, useNavigate } from 'react-router';

const Login = () => {
  const { loginUser ,registerInGoogle} = useContext(UserAuth)
  const [error,setError] = useState("")

// reacct-router hooks
  const navigation = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"


// event handler
  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password).then(res => {
      const user = res.user;
      // console.log(user)
      navigation(from)
    }).catch(err => setError(err))
  }

  const handleGoogleSignIn =()=>{
    setError("")
    registerInGoogle()
    .then(res=>{
      const user = res.user;
      // console.log(user);
      navigation(from)
    })
    .catch(error=>setError(error))
  }


  return (
    <div className="card w-4/5 lg:w-1/3 mx-auto  shadow-2xl bg-base-100 my-28">
      <div className="card-body">
        <form onSubmit={handleRegister} >

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            <label className="label">
              <Link to="/register" className=' link link-hover text-sky-600'>SignUp an Now</Link>
            </label>
          </div>
          <div className="form-control mt-6">
          {
              error && <h1 className='text-red-700'>Something went wrong pls provide valid information</h1>
              }
            <button className="btn btn-accent text-white">Login</button>
          </div>
        </form>
        <hr className='my-2' />
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent text-white">Google SignUp</button>
      </div>
    </div>
  );
};

export default Login;