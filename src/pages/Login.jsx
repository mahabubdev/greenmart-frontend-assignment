import React from 'react';
import Default from '../layouts/Default';
import { useLocation, useHistory } from 'react-router-dom';
import { googleLogin } from '../services/googleAuth';
import { FcGoogle } from 'react-icons/fc';
import { useAuthContext } from '../context/authContext';

const Login = () => {

    // route handle
    let history = useHistory();
    let location = useLocation();
    let { from, message } = location.state || {from: '/', message: 'Login Now'}

    // auth context
    const { loginUser } = useAuthContext();

    // login with google
    const loginWithGoogle = async () => {
        await googleLogin()
        .then(data => {
            console.log("GOOGLE==>", data)
            loginUser({
                name: data.displayName,
                email: data.email,
                photo: data.photoURL
            })
            history.replace(from);
        })
        .catch(err => {
            console.log("ERROR: ", err)
        })
    }

    return (
        <Default>
            <div className="form_container">
                <h1 style={{color: '#23b64f'}}>{message}</h1>
                <ul className="oauth-btns">
                    <li className="btn-oauth" onClick={loginWithGoogle}>
                        <FcGoogle />
                        <span className="btn-txt">continue with google</span>
                    </li>
                </ul>
            </div>
        </Default>
    );
};

export default Login;