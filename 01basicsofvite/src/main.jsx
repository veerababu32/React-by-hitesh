import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import React from 'react'

// const reactEl = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: "_blank"
//   },
//   children: "Click to Visit Google"
// }

// const myApp = function () {
//   return (
//     <h1>Hey this is React vite</h1>
//   )
// }

// const divEl = (
//   <h1>Hey Hi Guys!</h1>
// )

// const viteEle = React.createElement(
//   'a',
//   {
//     href: 'https://www.google.com',
//     target: '_blank'
//   },
//   'Click to Open Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // viteEle
  // divEl // we can render a variable of element
  // myApp()
)
