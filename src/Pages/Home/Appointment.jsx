import React from 'react';

const Appointment = () => {
    return (
        <div className='block lg:flex  items-end bg-accent-focus p-20'> 
            <div className='w-full lg:w-3/5'>
                <h1 className='text-center text-2xl lg:text-left lg:text-4xl font-bold text-white'>We’re welcoming new patients and <br/> can’t wait to meet you!</h1>
            </div>
            <div className='w-full mt-6 lg:mt-0 lg:w-2/5 flex items-center gap-11 justify-center '>
            <button className="btn  bg-white border-white text-accent">All Service</button>
            <button className="btn  bg-white border-white text-accent">Register Now</button>
            </div>
        </div>
    );
};

export default Appointment;