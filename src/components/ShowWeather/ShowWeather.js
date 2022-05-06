import './ShowWeather.css'

export default function ShowWeather(props) {
  const { dataWeather } = props
  
  return (
    <div className="showWeather">

        {
          dataWeather.cod !== 200 &&
          <p className="alert alert-secondary fst-italic mt-3">Ingresa una ciudad válida... <i className="fas fa-exclamation-circle"></i></p>
        }

        { 
          dataWeather.main ?
            <div className="card mx-auto fst-italic mt-4 info-weather" style={{width: "21rem", backgroundColor: "#ccc", border: "black"}}> 
              <div className="card-header">
                <h5 className="card-title"><i className="fas fa-flag"></i> {dataWeather.name}, {dataWeather.sys.country} <img className='weather-icon' src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt={dataWeather.weather[0].description} /></h5>
              </div>
              <div className="card-body">
                <p className="card-text" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>
                  {dataWeather.weather[0].description} 
                </p>
                <hr />
              </div>
              <ul className="list-group list-group-flush" style={{marginTop: '-20px'}}>
                <li className="list-group-item" style={{backgroundColor: "#ccc"}}><i className="fas fa-temperature-low"></i> Temperatura: {dataWeather.main.temp} °C <br /> (Min: {dataWeather.main.temp_min} °C - Max: {dataWeather.main.temp_max} °C)</li>
                <li className="list-group-item" style={{backgroundColor: "#ccc"}}><i className="fas fa-hand-holding-water"></i> Humedad: {dataWeather.main.humidity} %</li>
                <li className="list-group-item" style={{backgroundColor: "#ccc"}}><i className="fas fa-wind"></i> Velocidad Viento: {dataWeather.wind.speed} km/h</li>
                <li className="list-group-item" style={{backgroundColor: "#ccc"}}><i className="fas fa-ruler"></i> Latitud: {dataWeather.coord.lat} - Longitud: {dataWeather.coord.lon}</li>
              </ul>
            </div>
          :
            <p className="alert alert-secondary fst-italic mt-3">Sin solicitud todavía... <i className="fas fa-exclamation-circle"></i></p>
        }
    </div>
  )
}
