import './App.css';

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import ConfirmSignUp from "./ConfirmAuth.jsx";
import Update from './Update';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/confirmsignup" element={<ConfirmSignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </Router>
    );
}

export default App;