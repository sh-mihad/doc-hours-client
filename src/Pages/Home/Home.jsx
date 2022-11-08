import React, { useContext } from 'react';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import About from './About';
import Banner from './Banner';

const Home = () => {
    const {user} = useContext(UserAuth)
    console.log(user);
    return (
        <div>
            <Banner/>
            <About/>
        </div>
    );
};

export default Home;