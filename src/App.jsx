import './App.css';

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import ConfirmSignUp from "./ConfirmAuth.jsx";
import Update from './Update';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path={"/confirmsignup"} element={<ConfirmSignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </Router>
    );
}

export default App;