import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import styles from "../styles/search.module.css";
import axios from 'axios';
import Display from "./display";
import Loading from "./Loading";

export default function Search({ onSearchChange }) {


  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, isLoading] = useState(false);

  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=35fc0959accc8a717698633d0079aaff`
  console.log(location)

  const fetchWeather = async (e) => {
    // e.preventDefault()
    isLoading(true)
    await axios.get(BASE_URL).then((response) => {
      setWeather(response.data)
      // console.log(response.data)
    }).catch(err => {
      console.log("Errors: ")
    })

    setLocation('')
    isLoading(false)
  }

  if (loading) {
    return <Loading />

  }
  else {

    return (
      <div className={styles.card} >
        <div onSubmit={fetchWeather}>
          <Input className={styles.input}
            clearable
            placeholder="Enter the city name..."
            contentLeft={<FiSearch />}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Spacer y={1} />
        <Button className={styles.button} onClick={fetchWeather} >Search</Button>

        {weather.main && <Display data={weather} />}
      </div>
    );

  }
}
