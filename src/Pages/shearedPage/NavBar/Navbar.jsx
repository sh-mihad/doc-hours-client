import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/logo.png"
import { UserAuth } from '../../../Context/AuthProvider/AuthPorvider';

const Navbar = () => {

    const { user, logout } = useContext(UserAuth)

    const logoutUser = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }


    const formData = <>
        <li><Link to="/">Home</Link></li>


    </>

    return (
        <div className="navbar bg-base-100 shadow-lg py-5 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            formData
                        }
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-3  text-xl">
                    <img src={logo} className="w-12" alt="" />
                    <h2 className='text-sm font-semibold  lg:text-2xl '>Doc-Hours-Health</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        formData
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button onClick={logoutUser} to="/login" className="btn  btn-accent mr-4 text-white">Logout</button>
                            <div  className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL}  title={user?.displayName} alt=""/>
                            </div>
                            </div>
                        </>
                        :
                        <>
                            <Link to="/login" className="btn  btn-accent mr-4 text-white">Login</Link>
                            <Link to="/register" className="btn  btn-accent text-white">Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;