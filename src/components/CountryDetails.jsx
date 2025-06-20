import {  useEffect, useState } from 'react';
import './CountryDetails.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import CountryDetailsShimmer from './CountryDetailsShimmer';
import {useTheme} from  '../Hooks/useTheme';



const CountryDetails = () => {

  const [isDark] = useTheme();

  const params = useParams();
  const country = params.country;
  const {state} = useLocation();
  
  const [countryData,setCountryData] = useState(null);
  const [notFound,setNotFound] = useState(false);

  function updateCountryData(res_data){
    setCountryData(res_data);
    if(!res_data.borders){
      res_data.borders = [];
     
    }

    Promise.all(res_data.borders.map((border)=>{
                          return (fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json()).then(([data])=>data.name.common))
                    })).then((borders)=>

                     setTimeout(()=>{
                       setCountryData((previousState)=> ({...previousState,borders}))
                     })
                       
                   )

    
  }

  useEffect(() => {

  if(state){
    updateCountryData(state);
    return;
  }
   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((res) => res.json()).then(([res_data])=>{updateCountryData(res_data);console.log("hi")}).catch(()=>setNotFound(true))
   
  },
  [country])


  if(notFound ){
    return <h2>Country not Found..</h2>
  }

  return (countryData == null)?<CountryDetailsShimmer/> :
   (
  
    <div className={`main-container ${isDark?'dark':''}`}>
    <div className='btn'>
        <Link to="/" onClick={()=> history.back()}><i className="fa-solid fa-arrow-left-long"></i>    Back</Link>
    </div>
    
    <div className='country-container'>
        <div className='country-flag'>
          <img src={countryData.flags.png} alt="flag" />
        </div>
        <div className='country-details'>
    
                <h2>{countryData.name.common}</h2>
                 <p><b>Region: </b>{countryData.region}</p>
                <p><b>Population: </b>{countryData.population.toLocaleString('en-IN')}</p>               
                <p><b>Capital: </b>{countryData.capital}</p>
                <p><b>Continent: </b>{countryData.continents[0]}</p>
                <p><b>Currency: </b>{countryData.currencies[Object.keys(countryData.currencies)[0]].name}</p>
                <p><b>Languages: </b>{Object.values(countryData.languages).map((lang,i)=><span key={i}>{lang}</span>)}</p>
                <p><b>Top Level Domain : </b>{countryData.tld[0]}</p>
                {
                countryData.borders.length !== 0 &&
                (<div className='borderContainer'><span><b>Borders : </b></span>
                  {
                    countryData.borders.map((border,i)=>
                    <Link key={i}  className='border' to={`/${border}`}>{border}</Link>) 
                  }
                </div>)}
                
        </div>
    </div>
   </div>

    
  
  )
}

export default CountryDetails
