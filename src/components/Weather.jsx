import React,{useState,useEffect} from 'react'


const Weather = () => {

const [weather,setWeather] = useState(null) ;
const [loading,setLoading] = useState(true) ;
const [error, setError] = useState(null);
const [city,setCity] = useState("Chirala") ;
const [inputCity ,setInputCity] =useState("") ;

useEffect(()=>{
    const fetchWeather = async ()=>{
        try{
            setLoading(true) ;
            setError(null) ;
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f93196ada0cfbfb7e12d6ff8bda109cd&units=metric`
            ) ;
            if(!res.ok){
                 throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json() ;
            setWeather(data) ;
        }catch(err){
            setError(err.message) ;
        }finally{
            setLoading(false) ;

        }
        
    } ;
    fetchWeather();
},[city] ) ;





function handleInputChange(event){
    setInputCity(c => event.target.value) ;
}
const getTempColor = (temp) => {
  if (temp < 10) return "blue";     // Cold
  if (temp <= 25) return "green";   // Comfortable
  return "red";                     // Hot
};

const getWindColor = (speed) => {
  if (speed < 3) return "green";    // Calm
  if (speed <= 10) return "orange"; // Breezy
  return "red";                     // Windy
};

const getHumidityColor = (humidity) => {
  if (humidity < 30) return "orange";  // Dry
  if (humidity <= 60) return "green";  // Comfortable
  return "blue";                       // Humid
};

const getPressureColor = (pressure) => {
  if (pressure < 1000) return "orange";  // Low pressure
  if (pressure <= 1025) return "green";  // Normal
  return "blue";                         // High pressure
};



  return (
    <div className='weather-box'>
        <div className="search-box">
            <input type="text" value={inputCity} onChange={(e)=> setInputCity(e.target.value)} placeholder='Please enter you Location'/>
            <button onClick={()=>setCity(inputCity)}>Seach</button>
        </div>

        {loading && <p>Loading weather..</p>} 
        {error && (
        <p style={{ color: "red", textAlign: "center" }}>
            Sorry, we don’t have any weather reports for that city.  
            Please check the spelling and try again.
        </p>
        )}

        {weather && (
            <div className="weather-details">
  <h2>
    Weather in <span>{weather.name}</span>
  </h2>

  {/* Temperature */}
  <p style={{ color: getTempColor(weather.main.temp) }}>
    🌡 Temperature: {weather.main.temp}°C
  </p>

  {/* Condition */}
  <p>☁ Condition: {weather.weather[0].description}</p>

  {/* Wind */}
  <p style={{ color: getWindColor(weather.wind.speed) }}>
    💨 Wind Speed: {weather.wind.speed} m/s
  </p>

  {/* Humidity */}
  <p style={{ color: getHumidityColor(weather.main.humidity) }}>
    💧 Humidity: {weather.main.humidity} %
  </p>

  {/* Pressure */}
  <p style={{ color: getPressureColor(weather.main.pressure) }}>
    🌡️ Pressure: {weather.main.pressure} hPa
  </p>
</div>

        )}
    </div>
  ) 
}

export default Weather