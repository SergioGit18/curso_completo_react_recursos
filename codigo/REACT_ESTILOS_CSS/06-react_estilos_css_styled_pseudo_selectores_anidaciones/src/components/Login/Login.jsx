import './Login.css';
import { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [dataSend, setDataSended] = useState(false);

  const inputHandlers = {
    mail: setUserName,
    password: setPassword,
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const handler = inputHandlers[name];

    if (handler) {
      handler(value);
    }
  };

  const handleDataSend = (event) => {
    event.preventDefault();
    console.log(userName);
    console.log(password);
    setDataSended(true);
  };

  const errorMail = ((userName === "" || !userName.includes("@")) && dataSend);
  const errorPass = ((password === "" || password.length < 6) && dataSend);

  return (
    <div className='login-form-container'>
      <form className='login-form'>
        <h1>Login</h1>
        <input
          type='text'
          name='mail'
          placeholder='Username'
          className={`input-field ${errorMail ? 'input-field-error' : ''}`}
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className={`input-field ${errorPass ? 'input-field-error' : ''}`}
          onChange={(event) => handleInputChange(event)}
        />
        <button
          type='submit'
          className='submit-button'
          onClick={(event) => handleDataSend(event)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
