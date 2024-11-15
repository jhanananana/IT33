import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LiquidationReport from './src/LiquidationReport/LiquidationReport';
import Home from './src/Homepage/home.jsx';
import Dashboard from './src/Dashboard-Admin/Dashboard.jsx';

function App() {
  return (
    <BrowserRouter>  {/* Moved BrowserRouter outside the App div */}
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/liquidationreport" element={<LiquidationReport />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;