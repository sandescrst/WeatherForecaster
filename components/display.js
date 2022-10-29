import { Card } from '@nextui-org/react'
import React from 'react'
import Image from "next/image";
import styles from "../styles/display.module.css"
import myimage from "../public/unsplash.jpg"

const Display = ({ data }) => {
  console.log(data)
  console.log(data.main.feels_like)
  return (

    <div className={styles.mainCard}>

      <Card className={styles.display} css={{ mw: "600px", mh: '400px' }} >
        <div className={styles.tempNow}>
          <div className={styles.innerTemp}>
            <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt='/'
              width={100}
              height={100}
            />
            <p className={styles.descp}> {data.weather[0].main}</p>

          </div>

          <p className={styles.temp}> {data.main.temp.toFixed(0)}&#176;</p>
        </div>

        <div className={styles.forecast}>
          <p className={styles.head}>Weaather in {data.name}</p>

          <div>
            <p >Feels Like</p>
            <p className={styles.ptag}> {data.main.feels_like.toFixed(0)}</p>
          </div>
          <div>
            <p>Humidity</p>
            <p className={styles.ptag}>{data.main.humidity.toFixed(0)}</p>
          </div>
          <div>
            <p>Max Tempreture</p>
            <p className={styles.ptag}>{data.main.temp_max.toFixed(0)}</p>
          </div>
          <div>
            <p>Min Temperature</p>
            <p className={styles.ptag}>{data.main.temp_min.toFixed(0)}</p>
          </div>
        </div>

      </Card >




    </div >

  )
}

export default Display
