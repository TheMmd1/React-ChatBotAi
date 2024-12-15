import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import Internal from './components/Internal/Main/Internal.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Login />
  },
  {
    path : '/Home',
    element : <Home />
  },
  {
    path : '/Internal',
    element : <Internal />
  }
  // {
  //   path : '/Chats/:chatId',
  //   element : <Chat />
  // }
]);

// dynamic routing

// const {chatId} = useParams();

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <RouterProvider router={router}> </RouterProvider>
)
