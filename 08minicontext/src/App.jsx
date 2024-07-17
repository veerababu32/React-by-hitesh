import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { MiniProvider } from './context/MiniUserContext';

function App() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const someMethod = (username, password) => {
    setName(username)
    setPass(password)
  }

  return (
    <MiniProvider value={{name, pass, someMethod}}>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </MiniProvider>
  );
}

export default App;
