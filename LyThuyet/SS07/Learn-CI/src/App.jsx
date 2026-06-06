import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title=`You clicked ${count} times`
  });

  // useEffect(() => {
  //   document.title=`Tieu de ${count} lan`;
  // }, []);

  // useEffect(() => {
  //   document.title=`Tieu de ${count} lan`;
  // }, [count]);



  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default App
