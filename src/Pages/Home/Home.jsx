import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import About from './About';
import Appointment from './Appointment';
import Banner from './Banner';
import ServiceComp from './ServiceComp';

const Home = () => {
    const {user} = useContext(UserAuth)
    console.log(user);
    return (
        <div>
            <Banner/>
            <About/>
            <Appointment/>
            <ServiceComp/>
        </div>
    );
};

export default Home;