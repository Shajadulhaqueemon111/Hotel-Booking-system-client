import React from 'react';

const AddBookingCard = ({ bookRoom, bookRooms, setBookRooms }) => {

    const { roomDescription, price, roomSize, availability, roomImages } = bookRoom

    const style={
        width:'200px',
        height:'150px',
    }
    const Cardstyle={
        width:'300px',
        height:'500px'
    }
    return (
        <div>
            <div className="card w-3/5 bg-base-100 shadow-xl mx-auto" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={roomImages} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{roomDescription}</h2>
                    <p>Room-Size: {roomSize}</p>
                    <p>Availability: {availability}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary">Delete</button>
                    {/* <button className="btn btn-outline btn-secondary">Secondary</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBookingCard;