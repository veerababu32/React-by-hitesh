import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import {
  AddPost,
  AllPosts,
  EditPost,
  Home,
  Login,
  Post,
  SignUp,
} from './pages/index.js';
import { Protected } from './components/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        ),
      },
      {
        path: '/all-posts',
        element: (
          <Protected authentication>
            <AllPosts />
          </Protected>
        ),
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication>
            <AddPost />
          </Protected>
        ),
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication>
            <EditPost />
          </Protected>
        ),
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication>
            <Post />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
