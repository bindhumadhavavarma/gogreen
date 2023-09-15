import React, { useEffect, useState } from 'react'
import BarPlot1 from './BarPlot1'
import Methodologies from './Methodologies'
import { pushNotify } from './pushNotify'
import { AxiosPost } from '../../context/UserContext'

function Results(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [emissiondata, setData] = useState(null)

    const fetchCountryData = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost("getaverageemission", { country: localStorage.getItem("country") })
            console.log(data)
            setData(data.data.emissionPerCapita * 1000)
        } catch {
            pushNotify("error", "Error", "Server Error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{fetchCountryData()},[])

    return (
        <>
            <div className='mt-5'>
                <div className='text-center text-white'>
                    <h2 className='text-white' style={{ textAlign: "center" }}>Your Annual Carbon Emissions are {props.result}KgCO2e</h2>
                    <div style={{ color: "#FFD500" }}>Congratulations, you've taken a step towards a greener future! Your annual carbon emissions are {props.result}Kg.</div>
                </div>
                <div className='barplot-container ' style={{ backgroundColor: "white" }}>
                    {emissiondata == null ? null : <BarPlot1 percapitaemission={emissiondata} result={props.result}></BarPlot1>}
                </div>
                <div className='methodologies-container'>
                    <Methodologies></Methodologies>
                </div>
            </div>
        </>
    )
}

export default Results