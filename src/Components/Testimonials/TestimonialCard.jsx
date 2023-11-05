import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
const TestimonialCard = ({ user }) => {
    const { name, testimonial, rating, image } = user;
    const style={
        width:'200px',
        height:'150px'
    }
    const Cardstyle={
        
        height:'500px'
    }
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    return (
        <div data-aos="zoom-in-left">
            <div className="card   mx-auto bg-base-100 shadow-xl gap-4" style={Cardstyle}>
                <figure className="px-10 pt-10">
                    <img style={style} src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{testimonial}</p>
                    <p className='text-xl font-bold'>Rating: {rating}</p>
                    <div className="card-actions">
                    <button className="btn btn-outline btn-secondary">Secondary</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;