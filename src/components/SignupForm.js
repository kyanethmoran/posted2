import React from 'react';
import { Link } from 'react-router-dom';
import '../components/LoginForm.css';

function SignupForm(){
  return (
    <div>
        <form>
            <div className="formContainer">
                <h1>Sign Up To Start Posting</h1>
                <hr></hr>
                <input type="text" placeholder="Enter First Name" name="fname" id = "firstName" required/>
                <input type="text" placeholder="Enter Last Name" name="lname" id = "lastName" required/>
                <input type="text" placeholder="Enter Username" name="username" id="userName" required/>
                <input type="text" placeholder="Enter Email" name="email" id ="email" required/>
                <input type="password" placeholder="Enter Password" name="password" id = "password" required/>
            
                <hr></hr>
                <div>
                    <Link to='/Login'>
                        <button id="signUpBtn" type="submit" className="button">Sign Up</button>
                    </Link>
                </div>
            </div>
        </form>
    </div>
  );
}

export default SignupForm;