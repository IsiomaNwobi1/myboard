import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
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

export default App
