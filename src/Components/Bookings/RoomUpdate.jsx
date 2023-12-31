import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const RoomUpdate = () => {
    const updateData=useLoaderData()
    const {  _id, roomDescription, price, roomSize, availability, roomImages, specialOffers} = updateData;
    // const _id = updateData._id;
    const handelUpdate=(e)=>{
        e.preventDefault()
        const description=e.target.description.value 
        const roomSize=e.target.roomSize.value 
        const price=e.target.price.value 
        const  availability=e.target.availability.value 
        const specialOffers=e.target.specialOffers.value
        const roomImages=e.target.roomImages.value
        const date=e.target.date.value;
        const updateRoom={description,roomSize,price,availability,specialOffers,roomImages}
        console.log(updateRoom)

        fetch(`https://hotel-room-booking-server-eight.vercel.app/Bookings/${_id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify(updateRoom)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title: 'Updated Brand  Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24  '>
        <h2 className='text-3xl font-bold mb-5'>Update <span className='text-purple-600'>Booking Room</span></h2>
       
        <form onSubmit={handelUpdate}>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Update Room description</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='description' placeholder="Enter car name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Update RoomSize</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='roomSize' placeholder="Enter price" className="input input-bordered w-full" />
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
                        <span className="label-text">Update availability </span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='availability' placeholder="Enter availability" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Update specialOffers</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='specialOffers' placeholder="Enter specialOffers" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Update date</span>
                    </label>
                    <label className="input-group">

                        <input type="date" name='date' placeholder="Enter date" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Update RoomImages</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='roomImages' placeholder="Enter Photo url" className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <button className="btn mt-4 btn-block bg-[#D2B48C]">Update Room</button>
        </form>
    </div>
    );
};

export default RoomUpdate;