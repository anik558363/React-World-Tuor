import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    console.log(countries);

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div className="country_container">
                {
                    countries.map((country, index) => <Country country={country} key={index}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;