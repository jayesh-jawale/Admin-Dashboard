import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export function CreateAccount() {
    return (
      <div className='create-account-container'>
         <div className='create-account-image'></div>
          <div className='create-account-details'>
            <h2 style={{textAlign: "center"}}> Create an Account!</h2>
  
            <div className='create-form'>
              <div className='name-input-fields'>
                <input type="email" className="input-names" placeholder='First Name' />
                <input type="password" className="input-names" placeholder='Last Name' />
              </div>
              <div className='email-input-field'>
              <input type="email" className="email-field" placeholder='Enter Email Address...' />
              </div>
              <div className='password-input-fields'>
                <input type="password" className="input-names" placeholder='Password' />
                <input type="password" className="input-names" placeholder='Repeat Password' />
              </div>
            <div className='input-fields'>
              <button className="login-buttons login" type='button'>Register Account</button>
              <button className="login-buttons login-with-google" type='button'>Register with Google</button>
              <button className="login-buttons login-with-facebook" type='button'>Register with Facebook</button>
            </div>
            <Divider />
            <p style={{textAlign: "center"}}><Link to="/forgot-password">Forgot Password?</Link></p>   
            <p style={{textAlign: "center"}}><Link to="/login">Already have an account? Login!</Link></p>
            </div>
          </div>
      </div>
    )
  }