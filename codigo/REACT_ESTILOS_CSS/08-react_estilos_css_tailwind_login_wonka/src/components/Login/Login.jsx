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
    <div className='mx-auto mt-[200px] flex justify-center items-center w-1/2 max-w-[28rem] min-w-[15px] flex-1'>
      <form className='w-full bg-[#684fa3] p-10 rounded-[10px] shadow-lg flex flex-col items-end gap-7'>
        <h1 className='w-full text-center text-white'>Login</h1>
        <input
          type='text'
          name='mail'
          placeholder='Username'
          className='w-full p-[15px] border-2 border-[#e3d7ff] rounded-[10px] text-lg'
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='w-full p-[15px] border-2 border-[#e3d7ff] rounded-[10px] text-lg'
          onChange={(event) => handleInputChange(event)}
        />
        <button
          type='submit'
          className='text-center w-2/5 p-[15px] bg-white text-[#5c5a72] border 
          border-[#e3d7ff] rounded-[10px] cursor-pointer transition-all ease-in 
          duration-500 text-lg min-w-[7rem] hover:rounded-[25px] hover:border-black'
          onClick={(event) => handleDataSend(event)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
