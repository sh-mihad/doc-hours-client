import React from 'react';
import {Helmet} from "react-helmet";
import Swal from 'sweetalert2'

const AddService = () => {

  const handleAddService =(event)=>{
    event.preventDefault()
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;

    const service ={
        title,
        price,
        image,
        description
    };
  
    console.log(title,price,image,description);
   fetch("http://localhost:5000/service",{
    method: "POST",
    headers:{
        "content-type" : "application/json"
    },
    body: JSON.stringify(service)
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.acknowledged){
        Swal.fire(
            'Done',
            'Your service is successfuly done',
            'success'
          )
        event.target.reset("")
    }
   })
   

  }


    return (
        <div className='my-20 w-4/5 lg:w-3/5 mx-auto bg-slate-300 p-11'>
            <Helmet>
                <title>Service Add Page</title>
            </Helmet>
            <form onSubmit={handleAddService}>
                <div className='flex justify-between'>
                <input type="text" placeholder="Service Title" name='title' className="input input-bordered  w-full max-w-xs" required />
                <input type="number" placeholder="Price" name='price' className="input input-bordered  w-full max-w-xs" required />
                </div>

                <div className='w-full my-5'>
                <input type="url" placeholder="Service Image URL" name='image' className="input input-bordered  w-full " required />
                </div>

                <div className='w-full my-5'>
                <textarea className="textarea textarea-bordered w-full h-24" name='description' placeholder="Bio" required></textarea>
                <input type='submit'  className="btn btn-accent text-white w-full" value="Add Service"/>
                </div>
            </form>
        </div>
    );
};

export default AddService;