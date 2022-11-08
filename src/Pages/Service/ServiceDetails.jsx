import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            this is service details page
        </div>
    );
};

export default ServiceDetails;