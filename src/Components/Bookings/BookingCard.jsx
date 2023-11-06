import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({ booking }) => {
    // console.log(Object.keys(booking).join(","))
    const { _id, roomDescription, price, roomSize, availability, roomImages, specialOffers } = booking;

    const style={
        width:'200px',
        height:'150px',
    }
    const Cardstyle={
        
        height:'400px'
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={roomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{roomDescription}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                  <Link to={`/details/${_id}`}>
                  <button className="btn btn-outline btn-secondary">Details</button>
                  </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;