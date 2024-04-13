import { useState } from 'react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Dashboard from '../src/pages/user_default_dashboard/Dashboard';
import Form from './components/populated_dashboard/form/Form';
import Menu from './components/populated_dashboard/menu/Menu';
import GroceryDashboard  from './pages/user_grocery_dashboard/GroceryDashboard';
import GroceryBody from './components/groceries_dashboard/GroceryBody';
import TasksTab1Body from './components/groceries_dashboard/TasksTab1Body';
import { SignupPage } from './pages/SignupPage'
import {LoginPage} from './pages/LoginPage'
import EditMenu from './components/populated_dashboard/edit_menu/EditMenu';



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
      path: "/create-task",
      element:<Form/>
    },
    {
      path: "/edit-task",
      element:<Menu/>
    },
    {
      path: "/edit-menu",
      element:<EditMenu/>
    },

    {
      path:"/grocerydashboard",
      element:<GroceryDashboard/>,
      children: [
        {
          path: "",
          element:<GroceryBody/>,
        },
        {
        path: "groceries",
        element:<GroceryBody/>,
      },
      {
        path: "cooking",
        element:<TasksTab1Body/>,
      }
    ]
    }

  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
