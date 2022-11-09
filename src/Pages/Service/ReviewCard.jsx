import React from 'react';

const ReviewCard = ({ review }) => {
    const { comment, image, service, _id, name } = review
    return (
        <div className='shadow-lg p-5 border rounded my-4'> 
            <div className='flex items-center gap-3 '>
                <div className='avatar'>
                    <div className='w-10 rounded-full'>
                        <img src={image} className="" alt="" />
                    </div>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{comment}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;