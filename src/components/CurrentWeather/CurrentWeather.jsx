import React from 'react';
import styles from './CurrentWeather.module.css';

export default function CurrentWeather() {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <p className={styles.city}>Alytus</p>
        <p className={styles['weather-description']}>Sunny</p>
      </div>
      {/* <img className= src="" alt="" /> */}
    </div>
  );
}
