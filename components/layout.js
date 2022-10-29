import React from 'react'
import { useState } from 'react';
import styles from '../styles/layout.module.css';


export default function Layout({ children }) {

  return (
    <div className={styles.layout}>
      <div></div>
      <div className={styles.middile} >
        <main className={styles.children}> {children}</main>
      </div>
      <div></div>
    </div>
  )
}