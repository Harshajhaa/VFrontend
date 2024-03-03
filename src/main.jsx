import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Layout from './Layout.jsx'
import MemoGame from './MemoGame.jsx'
import Timer from './components/Timer.jsx'
import Puzzle from './Puzzle.jsx'
import Game from './Game.jsx'
import Home from './Home.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout></Layout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
      </Route>
      <Route path="/game" element={<Game></Game>}></Route>
    </>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
