import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import ConfirmSignUp from "./ConfirmAuth.jsx";
import Update from './Update';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
            const authenticatedUser = await Auth.currentAuthenticatedUser();
                if(authenticatedUser.username){setIsLogged(true)}
                setIsLogged(true);
                setUser(authenticatedUser);
            } 
            catch (error) {
                setIsLogged(false);
                setUser(null);
            }
        };


        checkAuthStatus();

        const authListener = Hub.listen('auth', ({ payload: { event } }) => {
            if (event === 'signIn') {
                checkAuthStatus();
            } else if (event === 'signOut') {
                setIsLogged(false);
                setUser(null);
            }
        });

        return () => {
            console.log('Cleaning up effect');
            authListener();
            Hub.remove('auth');
        };
    }, [isLogged]);

    // const PrivateRoute = ({ element, path }) => {
    //     return isLogged ? element : <Navigate to="/" />;
    // };

    return (
        <Router>
            <Navbar />
            {/* <Routes> */}
            <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/confirmsignup" element={!isLogged ? <Navigate to="/" /> : <ConfirmSignUp />} />
                <Route path="/profile" element={!isLogged ? <Navigate to="/" /> : <Profile />} />
                <Route path="/update" element={!isLogged ? <Navigate to="/" /> : <Update />} />
            </Routes>

                {/* <Route
                    path="/confirmsignup"
                    element={<PrivateRoute element={<ConfirmSignUp />} path="/confirmsignup" />}
                />
                <Route
                    path="/profile"
                    element={<PrivateRoute element={<Profile />} path="/profile" />}
                />
                <Route
                    path="/update"
                    element={<PrivateRoute element={<Update />} path="/update" />}
                /> */}
            {/* </Routes> */}
        </Router>
    );
}

export default App;