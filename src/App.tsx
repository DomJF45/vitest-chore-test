import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chores from './components/Chores';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import LinkedLetters from './components/LinkedLetters';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chores />
  },
  {
    path: "/linked-letters",
    element: <LinkedLetters />
  }
])

function App() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
