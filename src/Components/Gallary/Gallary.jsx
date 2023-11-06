import React, { useEffect, useState } from 'react';
import GalaryCard from './GalaryCard';

const Gallary = () => {
    const [gallerys, setGallerys] = useState([]); // Use square brackets to destructure the state

    useEffect(() => {
        fetch('http://localhost:5000/Bookings')
        .then(res => res.json())
        .then(data => setGallerys(data))
    }, []);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Gallery <span className='text-purple-600'>Room</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    gallerys?.map(gallery=><GalaryCard key={gallery._id} gallery={gallery}></GalaryCard>)
                }
            </div>
        </div>
    );
};

export default Gallary;