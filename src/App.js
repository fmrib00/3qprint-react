import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <div className='App'>
      <link rel="stylesheet" href="https://3qprint.blob.core.windows.net/other/3qprint_admin_style.css" />
      <div class="container">
        <div class="header">
          <h4>3QPrint Portal Login</h4>
        </div>
        <GoogleLogin width={200}
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
      </div>
    </div>
  )
}

export default App