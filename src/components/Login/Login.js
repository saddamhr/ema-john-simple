import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle().then(res => {
            window.location.pathname = '/review';
        })
    }

    const handleSignOut = () => {
        auth.signOut().then(res => {
            window.location.pathname = '/';
        })
    }
    console.log(auth.user)
    return (
        <div>
            <h1>Join the Party !!!</h1>
            {
                auth.user ? <button onClick={handleSignOut} className='main-button'>Sign Out</button> :
                <button onClick={handleSignIn} className='main-button'>Sign in with Google</button>
            }
        </div>
    );
};

export default Login;