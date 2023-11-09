import React, { useContext, useEffect, useState } from 'react';

import AddBookingCard from './AddBookingCard';
import {Helmet} from "react-helmet";
import axios from 'axios';


const AddBooking = () => {
    
    // const addLoad = useLoaderData()
    // console.log(addLoad)
      const [bookRooms,setBookRooms]=useState([])
      
      const url='http://localhost:5000/books'
      useEffect(()=>{

        axios.get(url,{withCredentials:true})

        .then(res=>{
            setBookRooms(res.data)
        })
      },[])
   
    return (
        <div>
            <Helmet>
                <title>My Booking Page</title>
            </Helmet>
            <h2 className='text-2xl font-bold'>My Booking <span className='text-purple-600'>Room</span>: {bookRooms.length}</h2>
           <div className='grid grid-cols-1 md:grid-cols-3  gap-3'> 
            {
                bookRooms?.map(bookRoom=><AddBookingCard key={bookRoom._id} bookRoom={bookRoom} bookRooms={bookRooms} setBookRooms={setBookRooms}></AddBookingCard>)
            }
           </div>
        </div>
    );
};

export default AddBooking;