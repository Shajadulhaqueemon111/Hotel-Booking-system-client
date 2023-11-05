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
  <aside>
  <img style={imgStyle} src="https://i.ibb.co/dKKtMdd/a-Tgsx6nt-E1-jpg.png" alt="" />
  
    <p className="font-bold text-black flex">
     <ImLocation className='text-2xl font-bold'></ImLocation>   
    Need a repair? our address <br/>Liza Street, New York
    </p> 
    
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Map;