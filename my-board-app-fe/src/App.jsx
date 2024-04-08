import { useState } from 'react';
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Dashboard from '../src/pages/user_default_dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]);

  return (
      <div>
        <div className='App'>
        <RouterProvider router={router}/>
        </div>
      </div>
    )
  }

export default App;