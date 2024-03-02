import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Layout from './Layout.jsx'
import MemoGame from './MemoGame.jsx'
import Timer from './components/Timer.jsx'
import Puzzle from './Puzzle.jsx'
import Game from './Game.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="register" element={<Register></Register>} />
      <Route path="login" element={<Login></Login>} />
      <Route path="game" element={<Game></Game>}></Route>
      <Route path="memogame" element={<MemoGame ></MemoGame>}></Route>
      <Route path="puzzle" element={<Puzzle></Puzzle>}></Route>
      <Route path="timer" element={<Timer></Timer>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
