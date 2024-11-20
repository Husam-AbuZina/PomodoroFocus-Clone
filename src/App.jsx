import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Box from './components/Box/Box'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = "#ff6347";
  }, [backgroundColor]);
  // useState()
  // useEffect()
  console.log("backgruond color =====> " + backgroundColor)
  return (
    <>
    <Layout>
      {/* <Header /> */}
      <Box changeBackground={setBackgroundColor}/>
    </Layout>
    </>
  )
}

export default App
