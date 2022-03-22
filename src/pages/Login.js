import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../components/LoginForm.css';
// import axios from axios;









function Login(){
    // let users ;
    // const navigate = useNavigate;

    const signOn = (e)=>{
        e.preventDefault();
        let username = e.target.username.value;
        console.log(username, 'user input username');
    }


    return(
        <>
            <form onSubmit={signOn}>
            <div className="formContainer">
                <h1>Login To Start Posting</h1>
                <hr></hr>
                <input type="text" placeholder="Enter Username" name="username" id="username" required/>
                <input type="password" placeholder="Enter Password" name="password" id="password" required/>
            
                <hr></hr>
                <div>
                    <button type="submit" className="signup">Login</button>
                    <button className='button'>Need to Signup?</button>
                </div>
            </div>
        </form>
        </>
    );
}

export default Login;

