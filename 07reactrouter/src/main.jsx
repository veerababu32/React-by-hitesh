import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import { About, Contact, Github, Home, User } from './components/index.js';
import { useGithubLoader } from './hooks/useGithubInfoLoader.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route loader={useGithubLoader} path="github" element={<Github />} />
      <Route
        path="*"
        element={
          <div className="bg-teal-200 text-3xl text-black text-center p-5">
            No Result Found
          </div>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
