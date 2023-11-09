import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';
import Marquee from 'react-fast-marquee';


const DetailsPage = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()

    const { _id, roomDescription, date, price, roomSize, availability, roomImages, specialOffers } = data
    // console.log(date)
    console.log(data)

    const style = {
        width: '200px',
        height: '150px',
    }
    const Cardstyle = {
        width: '300px',
        height: '500px'
    }

    const email = user.email

    const handleAddToBook = () => {
        const cartItem = { roomDescription, date, price, roomSize, availability, roomImages, email };

        // Check if the room is available before making the booking
        if (availability === 'Available') {
            fetch('http://localhost:5000/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added to Book Successfully',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Room Already Booked',
                text: 'Sorry, this room is already booked. Please choose another one.',
            });
        }
    };


    return (
        <div>
            <Marquee className='text-xl font-bold shadow-xl p-4'>
            "Elevate your stay with our hotel booking service, providing a curated selection of top-notch accommodations, easy reservation management, and personalized travel experiences for an unforgettable journey."
            </Marquee>
            <h2 className='text-2xl font-bold mb-3 mt-6'>Booking <span className='text-purple-700'>Details</span></h2>
            <div className="card  bg-base-100 shadow-xl mx-auto" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={data.roomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.roomDescription}</h2>
                    <p>Room-Size: {data.roomSize}</p>
                    <p>Room-Availability: {data.availability}</p>
                    <p>Date: {data.date}</p>
                    <div className="card-actions flex">
                        <button onClick={handleAddToBook} className="btn btn-outline btn-secondary">Book Now</button>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;
