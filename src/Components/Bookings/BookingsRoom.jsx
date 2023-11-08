// import React, { useEffect, useState } from 'react';
// import BookingCard from './BookingCard';
// import {Helmet} from "react-helmet";
// const BookingsRoom = () => {
//     const [bookings, setBookings] = useState([]); // Use square brackets to destructure the state

//     useEffect(() => {
//         fetch('https://hotel-room-booking-server-eight.vercel.app/Bookings')
//         .then(res => res.json())
//         .then(data => setBookings(data))
//     }, []);

//     return (
//         <div>
//             <Helmet>
//                 <title>
//                     Booking Page
//                 </title>
//             </Helmet>
//             <h2 className='text-2xl font-bold'>Booking <span className='text-purple-600'>Room</span>: {bookings.length}</h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
//                 {
//                     bookings?.map(booking=><BookingCard key={booking._id} booking={booking}></BookingCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default BookingsRoom;

import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import { Helmet } from 'react-helmet';

const BookingsRoom = () => {
    const [bookings, setBookings] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); 

    useEffect(() => {
        fetch('https://hotel-room-booking-server-eight.vercel.app/Bookings?sort=asc')
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

   
    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    
    const sortedBookings = [...bookings].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    return (
        <div>
            <Helmet>
                <title className='text-2xl'>Booking Page</title>
            </Helmet>
            <h2 className="text-2xl font-bold">
                Booking <span className="text-purple-600">Room</span>: {bookings.length}
            </h2>
            <button onClick={toggleSortOrder}>
                Toggle Sort Order ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                console.log(toggle Sort Order)
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sortedBookings.map((booking) => (
                    <BookingCard key={booking._id} booking={booking} />
                ))}
            </div>
        </div>
    );
};

export default BookingsRoom;

 