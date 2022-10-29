import React from 'react';
import loading from '../public/loading.gif';
import Image from "next/image";
import styles from '../styles/loading.module.css';
export default function Loading() {
  return (
    <div>
      <Image className={styles.loading} src={loading} alt='loading ...' />
      <h3>Loading....</h3>

    </div>
  );
}

