import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
const BookingCard = ({ booking }) => {
    // console.log(Object.keys(booking).join(","))
    const { _id, roomDescription, price, roomSize, availability, roomImages, specialOffers } = booking;

    const style={
        width:'200px',
        height:'150px',
    }
    const Cardstyle={
        
        height:'450px'
    }
    useEffect(() => {
        Aos .init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    return (
        
        <div data-aos="zoom-in-left">
           <Link to={`/details/${_id}`}>
            <div className="card bg-base-100 shadow-xl" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={roomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{roomDescription}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions flex">
                    
                  <button className="btn btn-outline btn-secondary">Details</button>
                  
                  {/* <Link to={`/updateRoom/${_id}`}>
                  {/* <button className="btn btn-outline btn-secondary">Update</button> */}
                  {/* </Link> */}
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default BookingCard;