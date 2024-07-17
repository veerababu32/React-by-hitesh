import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import UserContextProvider from  "./context/UserContextProvider.jsx"
import './index.css'
import React from 'react'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <UserContextProvider>
//     <App />
//   </UserContextProvider>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)