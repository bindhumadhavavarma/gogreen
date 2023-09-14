import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import WelcomeMessage from '../components/WelcomeMessage'
import CalculatorForm from '../components/CalculatorForm'
import Results from '../components/Results'
import Methodologies from '../components/Methodologies'

function Dashboard() {  
  const [result, setResult] = useState(null)

  return (
    <>
      <Navbar></Navbar>
      <div style={{ marginTop: "75px" }}>
        <WelcomeMessage/>
        <CalculatorForm result={result} setResult={setResult}/>
      </div>
    </>
  )
}

export default Dashboard