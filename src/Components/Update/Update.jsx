import React from 'react';

const Update = () => {
    return (
        <div className='bg-[#F4F3F0] p-24  '>
        <h2 className='text-3xl font-bold'>Update New Car Brand</h2>
        <p className='mb-4'>Car brands, also known as automotive brands or manufacturers, are companies that design, produce, and market automobiles. </p>
        <form onSubmit={handelUpdate}>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Update Car Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='name' placeholder="Enter car name" className="input input-bordered w-full" />
                    </label>
                </div>
                
                </div>
                
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Update Price</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='price' placeholder="Enter price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Update Rating</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Update Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='details' placeholder="Enter details" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Update Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='photo' placeholder="Enter Photo url" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <button className="btn mt-4 btn-block bg-[#D2B48C]">Update Car</button>
        </form>
    </div>
    );
};

export default Update;