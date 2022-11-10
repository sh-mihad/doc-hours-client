import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';


const EditReview = () => {

    const abc = useLoaderData();
    const navigate = useNavigate()
    // console.log(abc)
  

    // Button Hnadle function
    const handleEdit = (event) => {
        event.preventDefault();
        const edtiValue = event.target.comment.value;
        const updateValue = {
            review: edtiValue
        }
        
        fetch(`http://localhost:5000/update/${abc._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateValue)
        })
            .then(res =>res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    alert("your review is updated")
                    navigate("/my-reviews")
                }
            })

    }

    return (
        <div className='w-3/5 mx-auto my-16'>
            <h1 className='my-4 text-3xl text-accent-content font-bold'>Edit Your Review</h1>
            <form onSubmit={handleEdit} >
                <input type="text" placeholder="Type Your Review " defaultValue={abc.comment} name='comment' className="input input-bordered input-accent w-full " required />
                <input type="submit" className='btn btn-outline w-full mt-3' value="add review" />
            </form>
        </div>
    );
};

export default EditReview;