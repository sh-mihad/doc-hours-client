import React, { useEffect, useState } from 'react';
import ServiceCard from '../shearedPage/ServiceCard/ServiceCard';
import {Helmet} from "react-helmet";

const Service = () => {
    const [service,setService] = useState([])
    // const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    // console.log(service)
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <Helmet>
            <title>All Service </title>
          </Helmet>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Doc-hours-Service
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative"> The gesund</span>
          </span>{' '}
          specialities Technical service
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        There are many variations of passages of lorem Ipum available, but the majority which don't look even slightly believable.
        </p>
      </div>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>
        {
           service.length < 1 ? <div className='w-1/2 mx-auto text-center'><button className="btn loading">loading</button></div> :
           service?.map(srv =><ServiceCard
            key={srv._id} srv={srv}
            ></ServiceCard> ) 
        }
     </div>
  
    </div>
    );
};

export default Service;