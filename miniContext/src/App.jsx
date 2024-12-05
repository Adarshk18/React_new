import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
    </userContextProvider>
  )
}

export default App
