import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddBookingCard from './AddBookingCard';

const AddBooking = () => {

    const addLoad = useLoaderData()
    console.log(addLoad)
      const [bookRooms,setBookRooms]=useState(addLoad)

   
    return (
        <div>
            <h2>Add Cart:{addLoad.length}</h2>
           <div className='grid grid-cols-1 md:grid-cols-3  gap-3'> 
            {
                bookRooms.map(bookRoom=><AddBookingCard key={bookRoom._id} bookRoom={bookRoom} bookRooms={bookRooms} setBookRooms={setBookRooms}></AddBookingCard>)
            }
           </div>
        </div>
    );
};

export default AddBooking;