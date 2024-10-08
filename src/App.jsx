import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  )
}

export default App
