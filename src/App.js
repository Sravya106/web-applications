// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar'; 
import './App.css'; 
import APIpage from './Pages/APIpage';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* NavBar with Maps link */}
        <NavBar 
          iconColor="white" 
          textColor="white" 
          backgroundColor="black"  
        />

        <div className="center-content">
          <SearchBar color="black" placeholder="Search..." />
        </div>

      
        <Routes>
          <Route path="/maps" element={<APIpage />} /> {/* Maps Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

