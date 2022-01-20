import Divider from '@mui/material/Divider';
import { Link, useHistory } from 'react-router-dom';

export function Login({login, setLogin}) {

  const history = useHistory();

    return <form className='login-container'>
        <div className='login-image'></div>
        <div className='login-details'>
          <h2 style={{textAlign: "center"}}> Welcome Back</h2>
  
          <div className='login-form'>
            <div className='input-fields'>
              <input type="email" className="email-field" placeholder='Enter Email Address...' />
              <input type="password" className="email-field" placeholder='Password' />
            </div>
          <input style={{marginLeft: "20px", marginBottom: "1rem"}} type="checkbox" />Remember me
          <div className='input-fields'>
            <button className="login-buttons login" type='button' onClick={() => setLogin(!login) & history.push("/dashboard") }>Login</button>
            <button className="login-buttons login-with-google" type='button'>Login with Google</button>
            <button className="login-buttons login-with-facebook" type='button'>Login with Facebook</button>
          </div>
          <Divider />
          <p style={{textAlign: "center"}}><Link to="/forgot-password">Forgot Password?</Link></p>   
          <p style={{textAlign: "center"}}><Link to="create-account">Create an account!</Link></p>
          </div>
        </div>
      </form>;
  }