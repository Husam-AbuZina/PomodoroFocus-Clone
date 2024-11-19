import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Box from './components/box/box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // useState()
  // useEffect()

  return (
    <>
    <Layout>
      <Box />
    </Layout>
    </>
  )
}

export default App
