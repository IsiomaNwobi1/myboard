import { useState } from 'react'
import Dashboard from '../src/pages/user_default_dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      < Dashboard />
    </div>
  )
}

export default App
