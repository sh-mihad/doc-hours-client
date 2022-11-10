import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import ReviewList from './ReviewList';
import { ToastContainer, toast } from 'react-toastify';

const MyReview = () => {
    const { user } = useContext(UserAuth)
    // console.log(user)
    const [revews,setReviws] =useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviws(data))
    }, [user?.email])

    const handleDelete=(_id)=>{
        const confirmation = window.confirm(`Do you want to Delete this item?`);
        // console.log(confirmation)
        if(confirmation){
          fetch(`http://localhost:5000/review/${_id}`,{
           method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
               alert("Your Post is Deleted")
               const newReview = revews.filter(rvws=>rvws._id !==_id)
               setReviws(newReview);
            }
          })
         }
       }

     




    return (
        <div>
            <div className="overflow-x-auto w-full">
                {
                    revews.length <1 ?
                    <h1 className='text-4xl text-red-500 font-bold py-16 text-center'>'No reviews were added'</h1>
                    :
                    <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                               Delete
                            </th>
                            <th>Service </th>
                            <th>Review</th>
                            <th>Option</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                      {
                     
                      revews?.map(rvws=><ReviewList 
                        key={rvws._id} rvws={rvws} handleDelete={handleDelete}
                        ></ReviewList>)
                       
                      }
                    </tbody>


                </table>
                }
            </div>
        </div>
    );
};

export default MyReview;