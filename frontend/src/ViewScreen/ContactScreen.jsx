import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {Link} from 'react-router-dom';
// import LoadingBox from '../Components/LoadingBox';
// import MessageBox from '../Components/MessageBox';
// import { signinAction } from '../Store/Actions/UserAction';

function ContactScreen(props) {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');

    // const userSignin = useSelector((state) => state.userSignin);
    // const { userInfo, loading, error } = userSignin;

    // const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    // const dispatch = useDispatch();


    const submitHandler = (e) => {   
        e.preventDefault();
        alert(`Name: ${name}; Email: ${email}; Message: ${message}`);
        
    };


    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Contact</h1>
                </div>
                
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Name"
                 onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter email"
                 onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" placeholder="Enter Message" rows="7" 
                 onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div>
                <label/>
                <button type="submit" class="primary">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default ContactScreen;