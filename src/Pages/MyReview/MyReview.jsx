import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import ReviewList from './ReviewList';

const MyReview = () => {
    const { user } = useContext(UserAuth)
    // console.log(user)
    const [revews,setReviws] =useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviws(data))
    }, [user?.email])




    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                      {
                        revews?.map(rvws=><ReviewList 
                        key={rvws._id} rvws={rvws}
                        ></ReviewList>)
                      }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyReview;