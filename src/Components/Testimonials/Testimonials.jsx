import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("./Testimonial.json")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    })
    return (
        <div>
           <h2 className='text-2xl font-bold mt-6 mb-6'>User <span className='text-purple-600'>Testimonials</span></h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'> 
            {
               users.map(user=><TestimonialCard key={user.id} user={user}></TestimonialCard>)
            }
           </div>
        </div>
    );
};

export default Testimonials;