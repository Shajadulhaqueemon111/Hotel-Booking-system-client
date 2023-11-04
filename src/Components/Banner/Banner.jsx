
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // 
const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    return (
       
            <div className="hero min-h-screen"  style={{ backgroundImage: 'url(https://i.ibb.co/H4JfzKB/images-44.jpg)' }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold">
                    Hello there
                  </h1>
                  <p data-aos="fade-up" className="mb-5 text-xl"  data-aos-anchor-placement="bottom-center">
                    "Hotel booking is the process of securing lodging <br />accommodations for travelers, allowing them to choose and reserve rooms in <br />hotels, providing a convenient and efficient way to plan and enjoy their stays."
                  </p>
                  <button className="btn btn-primary" data-aos="fade-up">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          );
          
  
};

export default Banner;