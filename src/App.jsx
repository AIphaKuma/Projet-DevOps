import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ConfirmSignUp from "./ConfirmAuth.jsx";


function App() {
    return (
        <Router>
            <nav>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path={"/confirmsignup"} element={<ConfirmSignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
