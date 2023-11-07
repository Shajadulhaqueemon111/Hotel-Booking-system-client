import React from 'react';

const ReviewsCard = ({ review }) => {
    const { name, rating, comment, time, useremail } = review;
    const cardStyle = {
        maxWidth: '300px',   // Set a maximum width
        maxHeight: '400px',  // Set a maximum height
        // width: '100%',       // Allow the card to expand within the maximum width
    };
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow" style={cardStyle}>
                <figure className="px-10 pt-10">
                  
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Name:{name}</p>
                    <p>Email: {useremail}</p>
                    <p>comment: {comment}</p>
                    <p>Rating: {rating}</p>
                    <p>Rating: {time}</p>
                  
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* <div className="card w-1/2 mx-auto bg-base-100 shadow p-4" style={cardStyle}>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                     <p>Name:{name}</p>
                    <p>Email: {useremail}</p>
                    <p>comment: {comment}</p>
                    <p>Rating: {rating}</p>
                    <p>Rating: {time}</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ReviewsCard;