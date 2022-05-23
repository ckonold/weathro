import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const locStor = useState();
  const units = useState("metric");
  
  const getLocation = async() => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const loc = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    return loc;
  };



  const getWeather = async (lat,lon) => {
    const fiveDay = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=eb665be38d94d86f6e3a39b4b657ed09`
    )
      let response = await fiveDay.json()
      return response;
  }

  const setStorage = () => {

  }

  const checkStorage = () => {

  }



  return (
    <div className="App">
     
    </div>
  );
}

export default App;
