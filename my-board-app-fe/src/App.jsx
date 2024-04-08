import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/user_default_dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;