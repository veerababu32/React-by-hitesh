import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Logo, Input, Button } from './index';
import authService from '../appwrite/auth';
import { useNavigate, Link } from 'react-router-dom';
import { login as authSliceLogin } from '../feature/authSlice/authSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError('');
    try {
      const userData = await authService.login(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(authSliceLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block">
            <Logo />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your Account
        </h2>
        <p className="mt-2 text-center text-base text-black">
          Don&apos;t have any account?&nbsp;
          <Link
            to={'/signup'}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className='space-y-5'>
            <Input
              type="email"
              label="Email"
              placeholder="Email Address"
              {...register('email', { required: true })}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            <Button type="submit" className="w-full">
              Sign In{' '}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
