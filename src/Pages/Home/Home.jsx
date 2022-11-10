import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import About from './About';
import Appointment from './Appointment';
import Banner from './Banner';
import ServiceComp from './ServiceComp';
import {Helmet} from "react-helmet";

const Home = () => {
    const {user} = useContext(UserAuth)
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>Welcom to Doc-Hours-Health</title>
            </Helmet>
            <Banner/>
            <About/>
            <Appointment/>
            <ServiceComp/>
        </div>
    );
};

export default Home;