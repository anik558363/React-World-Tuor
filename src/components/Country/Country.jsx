import './Country.css'


const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='country'>
            <h4>Name: {name?.common}</h4>
            <img className='img' src={flags.png} alt="" />
        </div>
    );
};

export default Country;