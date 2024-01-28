import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import OtpVerification from "./OtpVerification";
import Login from './login';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/otp-verification",
        element: <OtpVerification/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path:"/admin",
    element:<AdminDashboard/>
  },
]);

createRoot(document.getElementById("root")).render(
  <>
  <RouterProvider router={router} />
  <ToastContainer />
  </>
);

