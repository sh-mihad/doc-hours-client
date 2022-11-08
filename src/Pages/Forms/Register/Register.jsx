import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  
    const handleRegister =event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,image,email,password);
        // registerUser(email,password)
        // .then(result=>{
        //     const user = result.user;
        //     console.log(user)
        // })
        // .catch(error=>console.log(error))
        
    }
   


    return (
        <div className="card  my-28 w-4/5 lg:w-1/3 mx-auto  shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image url</span>
            </label>
            <input type="url" placeholder="iamge-Url" name='image' className="input input-bordered" required/>
          </div>
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
            <input type="password" placeholder="password" name='password' className="input input-bordered" />
            <label className="label">
            <Link to="/login" className=' link link-hover text-sky-600'>Already have an accout login now</Link> 
            </label>
          </div>
          <div className="form-control mt-6">
          <button className="btn btn-accent text-white">Register</button>
          </div>
        </form>
      </div>
    );
};

export default Register;