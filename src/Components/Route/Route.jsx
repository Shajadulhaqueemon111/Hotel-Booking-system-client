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
              path:'/details/:id',
              element:<DetailsPage></DetailsPage>,
              loader:({params})=>fetch(`http://localhost:5000/Bookings/${params.id}`)
            },
            {
              path:'/bookings',
              element:<AddBooking></AddBooking>,
              loader:()=>fetch('http://localhost:5000/books')
              
            },
          ]
        },
      ]);
   


export default router;