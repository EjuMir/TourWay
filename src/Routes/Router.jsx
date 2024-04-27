import {
    createBrowserRouter,
  } from "react-router-dom";
import SignIn from "../Authentication/SIgnIn/SignIn";
import Root from "../Root/Root";
import SignUp from "../Authentication/SignUp/SignUp";
import AllTouristSpot from "../MainPages/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../MainPages/AddTouristSpot/AddTouristSpot";
import MyList from "../MainPages/MyList/MyList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../MainPages/Home/Home";
import ViewDetails from "../MainPages/ViewDetails/ViewDetails";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
           path:'/',
           element: <Home></Home>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/allTouristSpot',
            element:<AllTouristSpot></AllTouristSpot>,
            loader : () => fetch('http://localhost:5000/allTouristSpot')
        },
        {
            path:'/addTouristSpot',
            element:<PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
        },
        {
            path:'/MyList',
            element:<PrivateRoute><MyList></MyList></PrivateRoute>,
            loader : () => fetch('http://localhost:5000/allTouristSpot')
        },
        {
          path:'/viewDetails/:id',
          element:<ViewDetails></ViewDetails>,
          loader : ({params}) => fetch(`http://localhost:5000/viewDetails/${params.id}`)
        }
        
      ]
    },
  ]);


  export default router