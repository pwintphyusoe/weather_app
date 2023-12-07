import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Card = ({data}) => {

    const [value,setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

  if(JSON.stringify(data) !== '{}'){
    return (
        <div className="p-3 d-flex flex-column align-items-center">
        <Clock value={value} className="my-2"/>
          <h2>
            <FaLocationDot /> {data.name}, {data.sys.country}
          </h2>
          <h1>
            <img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} alt="" />
            {data.main.temp} °C
          </h1>
          <p>{data.weather[0].main}</p>
          <p>Humidity:{data.main.humidity} %</p>
          <p>Visibility: {data.visibility / 1000} km</p>
        </div>
      );
  }
  else{
    return (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
};

export default Card;
