import React from 'react';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Page/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Page/Login';
import Register from '../Page/Register';
import ErrorPage from '../Page/ErrorPage';
import Bookings from '../Bookings/BookingsRoom';
import BookingsRoom from '../Bookings/BookingsRoom';
import DetailsPage from '../Page/Details/DetailsPage';
import AddBooking from '../AddBooking/AddBooking';
import PrivateRoute from '../Private/PrivateRoute';
import Gallary from '../Gallary/Gallary';
import ContactUs from '../Contact/ContactUs';
import Update from '../Update/Update';
import RoomUpdate from '../Bookings/RoomUpdate';
import ReviewUser from '../Review/ReviewUser';
import ReviewDetaols from '../Review/ReviewDetaols';


    const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayOut></MainLayOut>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
             path:'/',
             element:<Home></Home>
            },
            {
             path:'/login',
             element:<Login></Login>
            },
            {
             path:'/register',
             element:<Register></Register>
            },
            {
              path:'/room',
              element:<BookingsRoom></BookingsRoom>
            },
            {
              path:'/gallery',
              element:<Gallary></Gallary>
            },
            {
              path:'/contact',
              element:<ContactUs></ContactUs>
            },
            {
              path:'/review',
              element:<ReviewUser></ReviewUser>
            },
            {
              path:'/reviews',
              element:<ReviewDetaols></ReviewDetaols>
            },
            {
              path:'/update/:id',
              element:<Update></Update>,
               loader:({params})=>fetch(`https://hotel-room-booking-server-eight.vercel.app/books/${params.id}`) 
            },
            {
              path:'/updateRoom/:id',
              element:<RoomUpdate></RoomUpdate>,
               loader:({params})=>fetch(`https://hotel-room-booking-server-eight.vercel.app/Bookings/${params.id}`) 
            },
            {
              path:'/details/:id',
              element:<DetailsPage></DetailsPage>,
              loader:({params})=>fetch(`https://hotel-room-booking-server-eight.vercel.app/Bookings/${params.id}`)
            },
            {
              path:'/bookings',
              element:<PrivateRoute><AddBooking></AddBooking></PrivateRoute>,
             
              
            },
          ]
        },
      ]);
   


export default router;