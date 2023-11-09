import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';
import Marquee from "react-fast-marquee";
const ReviewDetails = () => {
    const [reviews, setReviews] = useState([]); // Use square brackets to destructure the state

    useEffect(() => {
        fetch("https://hotel-room-booking-server-eight.vercel.app/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <Marquee>
            <h2 className='text-2xl font-bold'>Review <span className='text-purple-700'>User</span></h2>
            </Marquee>
           

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto'>
                {
                    reviews.map(review=><ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default ReviewDetails;
