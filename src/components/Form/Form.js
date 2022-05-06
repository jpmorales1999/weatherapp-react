import React, { useState } from 'react'

import ShowWeather from '../ShowWeather/'
import { URL_API, KEY_API } from '../../utils/constans'

import './Form.css'

export default function Form() {
  // Use State

  const [formValue, setFormValue] = useState({ city: "" })
  const [weather, setWeather] = useState({})

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value // Get vlaue of the Input
    })
  }

  const getWeather = async (e, formValue) => {
    try {
      e.preventDefault() // Cancel Submit For Default of the Browser
      const URL_FETCH = `${URL_API}${formValue.city}&appid=${KEY_API}&lang=es&units=metric` // URL Api Weather 
      const response = await fetch(URL_FETCH) // Api Rest Request
      const data = await response.json() // Transform to JSON
      setWeather(data) // Equals useState with response API
      setFormValue({
        city: ""
      })
    } catch (error) {
      alert('No se logró encontrar el clima, ¡Inténtalo después!')
    }
  }

  return (
    <div>
      <form onSubmit={(e) => getWeather(e, formValue)} method='POST'>
        <div className="col-md-12">
          <input type="text" name="city" className='form-control fst-italic' placeholder='Ingresa una ciudad...' onChange={(e) => onChange(e)} autoFocus value={formValue.city} />
        </div>
        <div className="col-md-12 mt-3">
          <input type="submit" className="btn btn-secondary fst-italic" value="Obtener Clima" />
        </div>
      </form>
      <ShowWeather dataWeather={weather} />
    </div>
  )
}
