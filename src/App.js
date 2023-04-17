// import logo from './logo.svg';
import {  useEffect, useState } from 'react';
import './App.css';

function App() {
  const [flag,setFlag]=useState(false)
  const [data,setData]=useState([])
  // const apiResponse = {
  //   "temperature": "+34 °C",
  //   "wind": "12 km/h",
  //   "description": "Clear",
  //   "forecast": [
  //     {
  //       "day": "1",
  //       "temperature": "34 °C",
  //       "wind": "13 km/h"
  //     },
  //     {
  //       "day": "2",
  //       "temperature": "+36 °C",
  //       "wind": "25 km/h"
  //     },
  //     {
  //       "day": "3",
  //       "temperature": " °C",
  //       "wind": "27 km/h"
  //     }
  //   ]
  // };
  // useEffect(()=>{

  //   setData(apiResponse)
  // },[])
  const apicall=()=>{
    fetch('https://goweather.herokuapp.com/weather/India')
    .then(response=>{
      return response.json()
    })
    .then((data)=>{
      setData(data)
    })
  }

  useEffect(()=>{
    apicall()
  },[])

  function btnfunc(){
    setFlag(!flag)
    console.log(flag);
  }
  return (
    <div>
        <p className='title'>Today's weather</p>
       <div className='today-weather'>
        <p>Today's temperature : {data.temperature}</p>
        <p>Today's wind speed : {data.wind}</p>
        <p>About today's weather : {data.description}</p>
       
      </div> 
      <div className='btn'>
      <button style={{color:'black', background:'burlywood',fontWeight:'bolder'}}onClick={btnfunc}> {flag? 'Close forecast' : 'See Forecast'}</button>
      </div>
      {flag ? 
      <div className='weather-container'>
        
      <div className='forecast'>
      
      <p className='title'>Forecast</p>
      {
        data.forecast ?
        data.forecast.map(forecast1=>(
          <div className='forecast-item'>
            <p>
              Day {forecast1.day}
            </p>
            <p>
            Temp: {forecast1.temperature}
            </p>
            <p>
              Wind:{forecast1.wind}
            </p>
          </div>
          
        )):<p> Still loading</p>
      }
      </div>
      </div>
      :<div/>}
      
    </div>
  );
}

export default App;
