import React from 'react'
import BarPlot1 from './BarPlot1'
import Methodologies from './Methodologies'

function Results(props) {
  return (
    <>
        <div className='mt-5'>
            <div className='text-center text-white'>
                <h2 className='text-white' style={{textAlign:"center"}}>Your Annual Carbon Emissions are {props.result}KgCO2e</h2>
                <div style={{color:"#FFD500"}}>Congratulations, you've taken a step towards a greener future! Your annual carbon emissions are {props.result}Kg.</div>
            </div>
            <div className='barplot-container ' style={{backgroundColor:"white"}}>
                <BarPlot1 result={props.result}></BarPlot1>
            </div>
            <div className='methodologies-container'>
                <Methodologies></Methodologies>
            </div>
        </div>
    </>
  )
}

export default Results