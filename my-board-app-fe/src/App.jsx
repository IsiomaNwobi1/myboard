import { useState } from 'react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Dashboard from '../src/pages/user_default_dashboard/Dashboard';

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
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
