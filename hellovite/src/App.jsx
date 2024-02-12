import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewGame from './components/NewGame'
import SideBar from './components/SideBar'
import UseRef from './components/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <NewGame/>
  <SideBar/>
  <UseRef/>
  </>
    )
}

export default App
