import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import Swal from 'sweetalert2'

const ServiceDetails = () => {
    const { user } = useContext(UserAuth);
    // const { photoURL, displayName } = user;
    // console.log(photoURL,displayName)
    const [loadedreview, setLoadedreview] = useState([])
    const service = useLoaderData();
    const { _id, title, price, description, image } = service;


    useEffect(() => {
         fetch("https://service-server-sh-mihad.vercel.app/review")
            .then(res => res.json())
            .then(data => setLoadedreview(data))
        
    }, [])
    // console.log(user);
    const handleReview = (event) => {
        event.preventDefault()
        const comment = event.target.comment.value;
        const review = {
            service: _id,
            comment: comment,
            image: user?.photoURL,
            name: user?.displayName,
            email: user?.email
           
        }
        // console.log(_id, "=",review.service)

        fetch("https://service-server-sh-mihad.vercel.app/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Thanks',
                        'Thank you for your review',
                        'success'
                      )
                    event.target.reset("")
                    fetch("https://service-server-sh-mihad.vercel.app/review")
                    .then(res => res.json())
                    .then(data => setLoadedreview(data))
                }
            })
    }

    // console.log(user);

    return (
        <div className='grid grid-cols-1 w-4/5 mx-auto gap-7 lg:grid-cols-2 my-20'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{price} taka</div>
                    </h2>
                    <p>{
                        description

                    }</p>
                </div>
            </div>
            <div className=''>
                <div>
                    <h1 className='text-2xl text-accent font-bold'>Add Your Review</h1>
                    {
                        user ? <>
                            <form onSubmit={handleReview} className='w-full'>
                                <input type="text" placeholder="Type Your Review " name='comment' className="input input-bordered input-accent w-full " required />
                                <input type="submit" className='btn btn-outline w-full mt-3' value="add review" />
                            </form>
                        </>
                            :
                            <>
                                <h1 className='my-5'>Pls login first than you can add your review</h1>
                              <Link to="/login">  <button className='btn btn-outline btn-sm'>Login / SignUp Now</button></Link>
                            </>
                    }
                </div>
                <div className='mt-8'>
                    <h2 className='text-3xl font-blod mb-3'>Customer Reviews</h2>
                    <hr />
                    {
                        loadedreview?.map(review => <ReviewCard
                            key={review._id} review={review}
                        ></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;