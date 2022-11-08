import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleRegister =event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password);
        
    }

    return (
        <div className="card w-4/5 lg:w-1/3 mx-auto  shadow-2xl bg-base-100 my-28">
        <form onSubmit={handleRegister} className="card-body">
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
            <label className="label">
              <Link to="/register" className=' link link-hover text-sky-600'>SignUp an Now</Link> 
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent text-white">Login</button>
          </div>
        </form>
      </div>
    );
};

export default Login;