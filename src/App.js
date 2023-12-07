/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { api, api_key } from "./api/apiResource.jsx";

const App = () => {

  const [countryName,setCountryName] = useState('Mandalay');
  const [data,setData] = useState({})

  const fetchData = async(country_name) => {
    console.log(country_name)

    if(country_name !== undefined){
      setCountryName(country_name)
    }

    try{
      const res = await api.get(`/weather?q=${countryName}&appid=${api_key}`);
      setData(res.data);
    }
    catch(error){
      console.log("error...");
    }
  }

  useEffect( () => {
    fetchData()
  },[countryName])


  return (
    <div>
      <div className="d-flex w-100 min-vh-100 justify-content-center align-items-center flex-column">
        <div className="bg-light">
          <Form fetchData={fetchData}/>
          <Card data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
