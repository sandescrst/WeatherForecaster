import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Search from "../components/search";
import { Card } from "@nextui-org/react";



export default function Home() {

  
  return (
    <div className={styles.container}>
      <h1> Weather Forecast</h1>
       <Search/> 

    </div>
  );
}
