// import { useContext } from 'react';
// import UserContext from '../context/UserContext';

import useMini from "../context/MiniUserContext";

function Profile() {
  // const { user } = useContext(UserContext);
  const {name, pass} = useMini()
  if (!name, !pass) return <h4>User Not logged in!!!</h4>;
  return (
    <h1>
      Profile: {name} {pass}
    </h1>
  );
}

export default Profile;
