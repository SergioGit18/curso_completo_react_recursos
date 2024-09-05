import React from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default App;
