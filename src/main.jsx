import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import Login from './Authentication/Login.jsx';
import Register from './Authentication/Register.jsx';
import Dashboard from './DashboardComponents/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,


      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
