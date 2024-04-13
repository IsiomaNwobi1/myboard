import { useState } from 'react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Dashboard from '../src/pages/user_default_dashboard/Dashboard';
import { SignupPage } from './pages/SignupPage'
import {LoginPage} from './pages/LoginPage'
import InitiateRestPage from './pages/InitiateRestPage';
import ResetPage from './pages/ResetPage';


function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/home",
      element: <LandingPage/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path:"/signup",
      element: <SignupPage />
    },
    {
      path:"/login",
      element: <LoginPage />
    },
    {
      path:"/initiate-reset-password",
      element: <InitiateRestPage />
    },
    {
      path:"/reset-password",
      element: <ResetPage />
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
