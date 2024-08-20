import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authService from '../src/appwrite/auth';
import { login, logout } from '../src/feature/authSlice/authSlice';
import { Footer, Header, Loader } from '../src/components/index';

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoader(false));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>{loader ? <Loader /> : <Outlet />}</main>
      </div>
      <div className='w-full block'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
