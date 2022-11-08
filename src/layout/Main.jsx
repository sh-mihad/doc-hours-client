import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/shearedPage/Footer/Footer';
import Navbar from '../Pages/shearedPage/NavBar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer/>
        </div>
    );
};

export default Main;