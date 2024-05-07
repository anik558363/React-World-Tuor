import { useState } from 'react';
import './Country.css'



const Country = ({ country }) => {


    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }



  


    const { name, flags, population, area, capital, cca3 } = country;
    return (
        <div className='country'>
            <h4>Name: {name?.common}</h4>
            <img className='img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Capital: {capital ? capital : "Unknown"}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited} className='mb'>{visited ? "Visited" : "Going" }</button>
        </div>
    );
};

export default Country;