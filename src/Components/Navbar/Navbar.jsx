import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Navbar = () => {
    const { user, userSingOut } = useContext(AuthContext)
    const imgStyle={
        width:'200px',
        height:'100px'
    }
    const navlink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/room'>Booking Room</NavLink></li>
        <li><NavLink to='/bookings'>My Bookings</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        


    </>

    const handelLogOut = (auth) => {

        userSingOut(auth)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navlink}
                    </ul>
                </div>
                <a className=" normal-case text-xl mb-8">

                    {/* <h2 className='text-xl font-bold'>HOTTLE <span className='text-green-500'>BOOKING</span></h2> */}
                      <Link to='/'>
                      <img style={imgStyle} src="https://i.ibb.co/bdFB5dm/screen-0.jpg" alt="" />
                      </Link>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL
                                } alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p >{user.displayName}</p>

                            </li>
                            <li>

                                <button onClick={handelLogOut} className="btn btn-sm mt-5  btn-secondary">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>

    );
};

export default Navbar;