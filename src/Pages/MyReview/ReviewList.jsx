import React, { useEffect, useState } from 'react';

const ReviewList = ({rvws}) => {
   const [service,setService] =useState({})
    // console.log(rvws);
    useEffect(()=>{
      fetch(`http://localhost:5000/services/${rvws?.service}`)
      .then(res=>res.json())
      .then(data=>setService(data))

    },[])

    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={service?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service?.title}</div>
              <div className="text-sm opacity-50">Price: {service?.price}</div>
            </div>
          </div>
        </td>
        <td>
          {rvws?.comment}
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default ReviewList;