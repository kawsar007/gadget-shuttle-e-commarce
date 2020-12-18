import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { signinAction } from '../Store/Actions/UserAction';

function SigninScreen(props) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signinAction(email, password)) 
    };

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter Email"
                required onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password"
                required onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <label/>
                <button type="submit" class="primary">Sign In</button>
            </div>
            <div>
                New customer? <Link to={`/register?redirect=${redirect}`}>Create Your Account</Link>
            </div>
            </form>
        </div>
    )
}

export default SigninScreen;