import { useId, useState } from 'react';
// import UserContext from '../context/UserContext';
import useMini from '../context/MiniUserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const id = useId();

  // const { setUser } = useContext(UserContext);
  const { someMethod } = useMini();

  const submitData = (e) => {
    e.preventDefault();
    // setUser({ username, password });
    someMethod(username, password)
  };

  return (
    <>
      <input
        id={`user_${id}`}
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />{' '}
      <input
        id={`pass_${id}`}
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <button onClick={submitData}>Submit</button>
    </>
  );
}

export default Login;
