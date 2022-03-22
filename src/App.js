import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css'
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/Home' element={<Home />} exact/>
          <Route path='/Login' element={<Login />}  exact/>
          <Route path='/Profile' element={<Profile />} exact/>
          <Route path='/Signup' element={<Signup />} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
