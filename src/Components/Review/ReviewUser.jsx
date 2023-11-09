import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';


const ReviewUser = () => {
    const{user}=useContext(AuthContext)

        const navigate=useNavigate()
        const handelAddReview=(e)=>{
            e.preventDefault()
            const name=e.target.name.value 
          
            const rating=e.target.rating.value 
            const comment=e.target.comment.value
            const date=e.target.date.value
    
            const useremail = user.email; 
            const userReview={name,rating,comment,date,useremail}
            console.log(userReview)
    
            fetch("http://localhost:5000/review",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
    
                },
                body:JSON.stringify(userReview)
    
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position:'top-end',
                        icon: 'success',
                        title: 'Add user review Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                navigate('/reviews')
              
            })
        }
        return (
            <div className='bg-[#F4F3F0] p-24  '>
            <h2 className='text-3xl font-bold'>Add User Review</h2>
            
            <form onSubmit={handelAddReview}>
                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
    
                            <input type="text" name='name' placeholder="Enter car name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
    
                            <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Comment</span>
                        </label>
                        <label className="input-group">
    
                            <input type="text" name='comment' placeholder="Enter comment" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group">
    
                            <input type="date" name='date' placeholder="Enter time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                {/* Form row */}
              
               
                <button className="btn mt-4 btn-block bg-[#D2B48C]">Review</button>
            </form>
        </div>
        );
    };

export default ReviewUser;