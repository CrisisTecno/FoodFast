import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRoot } from './routes'

function App() {
  console.log("hola")
  return (
   <div className='App'>
      <AppRoot/>
   </div>
  )
}

export default App
