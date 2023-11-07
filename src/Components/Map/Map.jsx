import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { ImLocation } from 'react-icons/im';

const Map = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,
        });
      }, []);
    const imgStyle={
        with:'500px',
        height:'400px'
    }
    return (
        <div div data-aos="flip-up">
             <h2 className='text-2xl font-bold mt-6 mb-7'>Hotel <span className='text-purple-600'>Lcation</span> </h2>
           
            <footer className="footer footer-center p-10 bg-slate-100 text-primary-content">
<div className=''>
<aside>
  {/* <img style={imgStyle} src="https://i.ibb.co/dKKtMdd/a-Tgsx6nt-E1-jpg.png" alt="" /> */}
  
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7427.992529276965!2d91.96800377637582!3d21.429391816927147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc86f5395ac75%3A0x31ba9960079d3f1e!2sHotel%20Kollol%20by%20J%26Z%20Group%2C%20Cox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1699205901681!5m2!1sen!2sbd"
      width="400"
      height="400"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <p className="font-bold text-black flex">
     <ImLocation className='text-2xl font-bold'></ImLocation>   
    Need a repair? our address <br/>Liza Street, Coxs-Bazzer
    </p> 
    
  </aside> 
</div>
  <nav>
    <div className="grid grid-flow-col gap-4">
   
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Map;