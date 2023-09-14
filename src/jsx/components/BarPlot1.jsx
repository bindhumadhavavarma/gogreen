import React from 'react'
import { Bar } from "react-chartjs-2";


function BarPlot1(props) {

  const data = {
    labels: ['Your Footprint', 'Country Average', 'World Average'], 
    datasets: [
      {
        label: 'Kg of CO2 Emmision',
        data: [props.result+10, props.result+100, props.result+150],
        borderWidth: 1,
        backgroundColor:"#FFD500",
      }
    ]
  }

  return (
    <>
      <div className="chart-container p-3 mt-3" style={{borderRadius:"15px"}}>
        <h2 style={{ textAlign: "center" }}>Your Carbon Footprint</h2>
        <Bar
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
      <div className='p-3 text-black' style={{color:"black"}}>
          <ul>
            <li>Your footprint is {props.result}KG per year</li>
            <li>The average footprint for people in your country is {1800} Kilograms</li>
            <li>The average for the European Union is about 6.8 metric tons</li>
            <li>The average worldwide carbon footprint is about 4.79 metric tons</li>
            <li>The worldwide target to combat climate change is 0 metric tons</li>
          </ul>
      </div>
    </>
  )
}

export default BarPlot1