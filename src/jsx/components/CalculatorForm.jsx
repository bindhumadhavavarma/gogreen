import React, { useState } from 'react'
import Results from './Results'

function CalculatorForm(props) {
    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia & Herzegovina",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Czechia",
        "Democratic Republic of Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "United States Virgin Islands",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ]
    const [formData, setFormData] = useState({ country: "", energy: "" })

    const onChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.setResult(formData.energy * 0.3)
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
                                    <select className='form-control border-0' value={formData.country} name="country" placeholder='country/Region' style={{ "height": "55px", width: "300px" }}>
                                        {
                                            countries.map((country) => { return (<option className='form-control' value={country}>{country}</option>) })
                                        }
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6 mt-3">
                                    <input type="text" value={formData.energy} className="form-control border-0" placeholder="Energy Consumption in Kwh per year" name='energy' onChange={onChangeInput} style={{ "height": "55px", width: "300px" }} />
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-secondary rounded-pill py-3 px-5" style={{ width:"100%",backgroundColor:"rgb(255, 213, 0)",color:"black" }} type="submit">Calculate</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    {
                        props.result == null ? null : <Results result={props.result}></Results>
                    }
                </div>
            </div>
        </>
    )
}

export default CalculatorForm