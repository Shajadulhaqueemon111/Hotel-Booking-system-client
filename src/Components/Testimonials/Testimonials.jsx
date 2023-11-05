import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-6 mt-6'>User <span className='text-purple-700'>Testimonials</span></h2>
            <div className="carousel w-full h-[600px]">
           
           <div id="slide1" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/9HwVXz1/images-33.jpg" className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                   <div className='text-white space-y-7 pl-12 w-1/2'>
                       <h2 className='text-4xl font-bold'>Royal Beach Place</h2>
                       <h2 className='text-xl'>Rating: 4.5</h2>
                       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                       <div>
                          
                           <button className="btn btn-outline btn-secondary">Latest Hotel Room</button>
                       </div>
                   </div>
               </div>
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                   <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide2" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/chcm3Hq/images-34.jpg" className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                   <div className='text-white space-y-7 pl-12 w-1/2'>
                       <h2 className='text-4xl font-bold'>Ocean Beach Club</h2>
                       <h2 className='text-xl'>Rating:5.5</h2>
                       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                       <div>
                           
                           <button className="btn btn-outline btn-secondary">Latest Hotel Room</button>
                       </div>
                   </div>
               </div>
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                   <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide3" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/pfRjhsS/images-35.jpg" className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                   <div className='text-white space-y-7 pl-12 w-1/2'>
                       <h2 className='text-4xl font-bold'>Ocean Mine Hotel</h2>
                       <h2 className='text-xl'>Rating: 5.6</h2>
                       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                       <div>
                         
                           <button className="btn btn-outline btn-secondary">Latest Hotel Room</button>
                       </div>
                   </div>
               </div>
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                   <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
           </div>
           <div id="slide4" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/NL1sqQk/images-36.jpg" className="w-full rounded-xl" />
               <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                   <div className='text-white space-y-7 pl-12 w-1/2'>
                       <h2 className='text-6xl font-bold'>Beast Weastern Oceanside</h2>
                       <h2 className='text-xl'>Rating: 5.7</h2>
                       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                       <div>
                           
                           <button className="btn btn-outline btn-secondary">Latest Hotel Room</button>
                       </div>
                   </div>
               </div>
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                   <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                   <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
           </div>
       </div>
        </div>
    );
};

export default Testimonials;