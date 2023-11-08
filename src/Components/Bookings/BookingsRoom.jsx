import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import {Helmet} from "react-helmet";
const BookingsRoom = () => {
    const [bookings, setBookings] = useState([]); // Use square brackets to destructure the state

    useEffect(() => {
        fetch('https://hotel-room-booking-server-eight.vercel.app/Bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, []);

    return (
        <div>
            <Helmet>
                <title>
                    Booking Page
                </title>
            </Helmet>
            <h2 className='text-2xl font-bold'>Booking <span className='text-purple-600'>Room</span>: {bookings.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    bookings?.map(booking=><BookingCard key={booking._id} booking={booking}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookingsRoom;
 