import React from 'react';

const NewsLetter = () => {
    return (
       <div >
        <h2 className='text-2xl font-bold mb-5'>News <span className='text-purple-600'>Letter</span></h2>
        <div className='bg-purple-700 gap-3 p-8'>
            <h2 className='text-xl text-white font-bold'>Subscribe To Our NewsLetter</h2>
            <p className='text-white'>Implement an intuitive and user-friendly booking system on your website or app. <br />
            Provide a calendar for selecting check-in and check-out dates. <br />
            Include options for specifying the number of guests and rooms.</p>
        <div className='mt-3 mb-4'>
        <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" />
        
        </div>
        <div>
        <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
        
        </div>
        <button className='btn btn-secondary mt-2'>Subscribe</button>
        </div>
       </div>
    );
};

export default NewsLetter;