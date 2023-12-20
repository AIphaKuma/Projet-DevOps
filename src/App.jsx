import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import Update from './Update';

import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/update">Update</Link>
            </nav>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </Router>
    );
}

export default App;