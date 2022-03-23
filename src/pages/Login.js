import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/LoginForm.css';
import axios from 'axios';









function Login(){
    const navigate = useNavigate();
    let users ;
    
    const dbURL = 'https://posted2-8df76-default-rtdb.firebaseio.com/'
    const jsonEXT = '.json'

    useEffect(()=>{
        axios.get(dbURL+jsonEXT).then(response =>{
            users = Object.keys(response.data)
            console.log(users, 'hook works')
            console.log('success')
        })
    }, [])

    const signOn = (e)=>{
        e.preventDefault();
        let username = e.target.username.value;
        console.log(username, 'user input username');
        users.forEach(element => {
            console.log(element ,'each user logged')
        });
        if (users.includes(username)){
            window.sessionStorage.setItem('activeUser', username)
            navigate('/Home')
        } else {
            alert('please enter valid information')
        }
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

