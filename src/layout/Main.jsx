import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/shearedPage/NavBar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;