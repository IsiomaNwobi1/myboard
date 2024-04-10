import { useState } from 'react';
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Dashboard from '../src/pages/user_default_dashboard/Dashboard';
import Form from './components/populated_dashboard/form/Form';
import Menu from './components/populated_dashboard/menu/Menu';
import GroceryDashboard  from './pages/user_grocery_dashboard/GroceryDashboard';


function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path:"/dashboard",
      element:<Dashboard/>
    }, 
    {
      path: "/create-task",
      element:<Form/>
    },
    {
      path: "/edit-task",
      element:<Menu/>
    },
    {
      path:"/grocerydashboard",
      element:<GroceryDashboard/>
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