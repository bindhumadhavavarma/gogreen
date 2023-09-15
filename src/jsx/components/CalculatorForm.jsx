import React, { useEffect, useState } from 'react'
import Results from './Results'
import { AxiosGet, AxiosPost } from '../../context/UserContext'
import { pushNotify } from './pushNotify'
import { ScaleLoader } from 'react-spinners'

function CalculatorForm(props) {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({ country: "", energy: "" })
    const [carbonFactor, setCarbonFactor] = useState(null)

    const onChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (e.target.name == "country") localStorage.setItem("country", e.target.value)
    }

    const fetchCountryEmission = async () => {

    }

    const fetchCountries = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosGet('getcountrylist')
            console.log(data)
            if (data.success) {
                setCountries(data.country_list)
            } else {
                pushNotify("error", "Error", data.message)
            }
        } catch {
            pushNotify("error", "Error", "Server Error!")
        }
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            setIsLoading(true)
            const data = await AxiosPost("getemissionfactors", { country: localStorage.getItem("country") })
            console.log("countryemission")
            console.log(data)
            setCarbonFactor(data.data.totalProdFuel)
            console.log("carbonfactor : " + carbonFactor)
            props.setResult((formData.energy * data.data.totalProdFuel).toFixed(2))
        } catch {
            pushNotify("error", "Error", "Server Error")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <div className="quote-text py-5 wow fadeIn d-flex align-items-center justify-content-center calculator-container" data-wow-delay="0.5s" style={{ backgroundColor: "#ED1C24" }}>
                <div className="p-lg-5 pe-lg-0">
                    <h2 className='text-white'>Calculate Your Environmental Impact and Energy Costs</h2>
                    <div style={{ margin: "20px auto", width: "fit-content" }}>
                        <form className='m-3' onSubmit={submitHandler}>
                            <div className=" g-3 col-12">
                                <div className="col-12 col-sm-6">
                                    <select className='form-control border-0' value={formData.country} onChange={onChangeInput} name="country" placeholder='country/Region' style={{ "height": "55px", width: "300px" }}>
                                        {
                                            countries.map((country) => { return (<option className='form-control' value={country}>{country}</option>) })
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6 mt-3">
                                    <input type="text" value={formData.energy} className="form-control border-0" placeholder="Energy Consumption in Kwh per year" name='energy' onChange={onChangeInput} style={{ "height": "55px", width: "300px" }} />
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-secondary rounded-pill py-3 px-5" style={{ width: "100%", backgroundColor: "rgb(255, 213, 0)", color: "black" }} type="submit">Calculate</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    {
                        props.result == null ? null : isLoading ? <ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center", marginTop: "100px" }} /> : <Results result={props.result}></Results>
                    }
                </div>
            </div>
        </>
    )
}

export default CalculatorForm