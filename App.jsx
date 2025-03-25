import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Product from './Components/Product.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Login</Link> | <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;