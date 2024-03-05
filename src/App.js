
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import CreateAccount from './components/signup/Signup';
import ManageNote from './components/manageNote/ManageNote';
import ManageUsers from './components/manageUsers/ManageUsers';
import EditNote from './components/manageNote/EditNote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/manageNote" element={<ManageNote />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/editeNote" element={<EditNote />} />
      </Routes>
    </Router>
  );
}

export default App;
