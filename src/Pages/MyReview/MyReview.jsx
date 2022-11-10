import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthProvider/AuthPorvider';
import ReviewList from './ReviewList';
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
// import { ToastContainer, toast } from 'react-toastify';

const MyReview = () => {
    const { user,logout } = useContext(UserAuth)
    // console.log(user)
    const [revews,setReviws] =useState([])
    const navigation = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
            headers: {
               authorizaton:`Bearer ${localStorage.getItem("userToken")}`
            }
        })
            .then(res =>{
                if(res.status === 401 || res.status === 403){
                    logout().then(()=>{}).catch(err=>console.log(err))
                   return  navigation("/login") 
                }
               return res.json()
            })
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
                Swal.fire(
                    'Deleteted',
                    'Your review is successfuly delted',
                    'success'
                  )
               const newReview = revews.filter(rvws=>rvws._id !==_id)
               setReviws(newReview);
            }
          })
         }
       }

     




    return (
        <div>
            <Helmet>
                <title>All of Reviews</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                {
                    revews?.length <1 ?
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