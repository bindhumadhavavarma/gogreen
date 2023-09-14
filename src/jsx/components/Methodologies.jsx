import React from 'react'

function Methodologies() {
    return (
        <>
            <div class="accordion mt-5" id="accordionExample" style={{ maxWidth: "1000px" }}>

                <div class="accordion-item ">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Calculation Methodologies
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <div style={{ "font-family": "Arial, sans-serif", "font-size": "16px" }}>
                                <h2>How We Calculated Your Emissions</h2>
                                <p>Calculating your annual carbon emissions involves considering various factors contributing to your environmental impact. We've broken down the calculation into the following steps:</p>

                                <h3>Energy Consumption:</h3>
                                <p>We evaluate your household's energy consumption, including electricity and heating. The formula used is:</p>
                                <div style={{ "background-color": "#f0f0f0", "padding": "10px" }}>
                                    <p>Emission (Energy) = Energy Consumption (kWh) x Carbon Intensity (kg CO<sub>2</sub>/kWh)</p>
                                </div>
                                <p>Where:</p>
                                <ul>
                                    <li><strong>Energy Consumption (kWh):</strong> The total electricity and heating energy used in your household.</li>
                                    <li><strong>Carbon Intensity (kg CO<sub>2</sub>/kWh):</strong> The average carbon intensity of electricity and heating sources in your region.</li>
                                </ul>

                                <p>After calculating emissions for energy consumption, we sum them up to determine your total annual carbon emissions.</p>

                                <p>Your personalized carbon footprint is a valuable insight into your environmental impact. By understanding how your energy usage affects the environment, you can take steps to reduce your carbon emissions and contribute to a sustainable future.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Data Used and Sources 
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <h5 className='text-capitalize'>Country specific Electricity Grid Greenhouse gas Emission Factors</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Country</th>
                                        <th scope="col">Total mix factor</th>
                                        <th scope="col">Generation</th>
                                        <th scope="col">Transmission & Distribution</th>
                                        <th scope='col'>Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Afghanistan</th>
                                        <td>0.12410</td>
                                        <td>0.10441</td>
                                        <td>0.01968</td>
                                        <td>Carbon Footprint Ltd's GHG Factors for International Grid Electricity (ROW) 2023</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5 className='text-capitalize'>Country wise Per Capita CO2 Emmissions</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Country</th>
                                        <th scope="col">CO2 Emissions per capita (tons) </th>
                                        <th scope="col">CO2 Emissions (tons)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Afghanistan</th>
                                        <td>7.44</td>
                                        <td>10,432,751,400</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Next Steps for Reductions
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div style={{ "font-family": "Arial, sans-serif", "font-size": "16px" }}>
                                <h2>Take Action: Go Green and Reduce Your Carbon Footprint</h2>

                                <h3 className='mt-4'>Tips for Reducing Your Carbon Footprint:</h3>
                                <p>Now that you know your annual carbon emissions, here are some practical tips to help you reduce your environmental impact:</p>

                                <ul>
                                    <li><strong>Switch to Renewable Energy Sources:</strong> Consider using renewable energy sources such as solar or wind power to reduce your carbon emissions from electricity consumption.</li>
                                    <li><strong>Improve Home Energy Efficiency:</strong> Invest in energy-efficient appliances, seal drafts, and insulate your home to minimize energy waste.</li>
                                    <li><strong>Reduce, Reuse, Recycle:</strong> Practice the 3 Rs to reduce waste and lower your carbon footprint.</li>
                                    <li><strong>Use Public Transport or Carpool:</strong> Reduce emissions from transportation by sharing rides or using public transportation.</li>
                                    <li><strong>Eat Sustainable:</strong> Choose locally sourced, organic, and sustainably produced food to lower the carbon impact of your diet.</li>
                                </ul>

                                <h3>Motivation for Going Green:</h3>
                                <p>Choosing green energy sources and adopting eco-friendly practices not only helps reduce your carbon footprint but also benefits the planet and future generations. Here's why you should consider making the switch:</p>

                                <ul>
                                    <li><strong>Preserve the Environment:</strong> Reduce air and water pollution, protect ecosystems, and combat climate change by reducing your carbon emissions.</li>
                                    <li><strong>Save Money:</strong> Energy-efficient practices can lower your utility bills and reduce long-term energy costs.</li>
                                    <li><strong>Support Renewable Energy:</strong> By using clean energy sources, you support the growth of renewable energy industries and reduce reliance on fossil fuels.</li>
                                    <li><strong>Set an Example:</strong> Inspire others to follow your lead and create a positive impact on the environment.</li>
                                </ul>

                                <p>By taking these steps and adopting green practices, you can make a meaningful difference and contribute to a sustainable, healthier planet.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Methodologies