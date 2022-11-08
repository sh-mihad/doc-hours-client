import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthProvider/AuthPorvider';

const Register = () => {

  const { createUser, addUserNmaeAndImage ,registerInGoogle} = useContext(UserAuth);
  const [error,setError] =useState("")
  // console.log(addUserNmaeAndImage)

  const handleRegister = event => {
    event.preventDefault()
    setError("")
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        addUserNmaeAndImage(name, image)
          .then(() => { })
          .catch((error) => console.error(error))
      })
      .catch(error => setError(error))

  }

  const handleGoogleSignIn =()=>{
    setError("")
    registerInGoogle()
    .then(res=>{
      const user = res.user;
      console.log(user);
    })
    .catch(error=>setError(error))
  }




  return (
    <div className="card  my-28 w-4/5 lg:w-1/3 mx-auto  shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image url</span>
            </label>
            <input type="url" placeholder="iamge-Url" name='image' className="input input-bordered" required />
          </div>
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
            <input type="password" placeholder="password" name='password' className="input input-bordered" />
            <label className="label">
              <Link to="/login" className=' link link-hover text-sky-600'>Already have an accout login now</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <h1>
            {
              error && <h1>Something went wrong pls provide valid information</h1>
              }
            </h1>
            <button className="btn btn-accent text-white">Register</button>
          </div>
        </form>
        <hr className='my-2' />
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent text-white">Google SignUp</button>
      </div>
    </div>
  );
};

export default Register;