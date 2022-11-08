import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({srv}) => {
    const {_id,title,price,image,description} = srv
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{price} taka</div>
                </h2>
                <p>{
                    description.length>100? description.slice(0,100) + "....":description
                    
                    }</p>
                <div className="card-actions justify-end">
                <Link to={`/services/${_id} `} >
                <button className="btn btn-sm btn-outline">View Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;