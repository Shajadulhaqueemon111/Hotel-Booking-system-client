import React from 'react';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Page/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Page/Login';
import Register from '../Page/Register';
import ErrorPage from '../Page/ErrorPage';


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
          ]
        },
      ]);
   


export default router;