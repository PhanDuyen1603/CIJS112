import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './components/Hello'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // const school = "MindX Technology School";
  // const age = 10;

  return (
    <>
      <Card schoolName={"MindX Technology School"} age={10} />
      <Card schoolName={"Code Nation"} age={20} />
      <Card schoolName={"Code DEV"} age={30} />
    </>
  )
}

export default App
