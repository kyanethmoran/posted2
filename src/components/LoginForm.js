import React from 'react'
import '../components/LoginForm.css';
import {Link} from 'react-router-dom';

function LoginForm() {


  return (
    <div>
        {/* <input
        onChange={(event) => {
          setUsername(event.target.value); //sets the username that is "active"
        }}
        /> */}

        <form>
            <div className="formContainer">
                <h1>Login To Start Posting</h1>
                <hr></hr>
                <input type="text" placeholder="Enter Username" name="username" id="loginInput" required/>
                <input type="password" placeholder="Enter Password" name="password" required/>
            
                <hr></hr>
                <div>
                    <button type="submit" className="signup" id="loginBtn">Login</button>
                    <button className='button'>Need to Signup?</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm