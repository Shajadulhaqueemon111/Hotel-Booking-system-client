import React from 'react';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Page/Home';

const Route = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayOut></MainLayOut>,
          children:[
            {
             path:'/',
             element:<Home></Home>
            }
          ]
        },
      ]);
   
};

export default Route;