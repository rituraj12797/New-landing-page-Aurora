import { useState } from 'react'
import './App.css'
import Layout from './layouts/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
    <Layout/>
    </div> 
  )
}

export default App
