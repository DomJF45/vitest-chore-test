import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chores from './components/Chores';


export interface iChore {
  id: number;
  name: string;
  status: 'complete' | 'in-progress';
  priority: string;
}

function App() {

  return (
    
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Chore List</h1>
      <Chores />
    </div>

  )

}

export default App
