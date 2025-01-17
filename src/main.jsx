import React from "react";
import ReactDOM from "react-dom/client"
import './index.css';
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Router';
import Firebase from "./Firebase/FIrebase";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Firebase>
      <RouterProvider router={router} />
    </Firebase>
  </React.StrictMode>,
)