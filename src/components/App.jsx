import React from 'react';
import Geolocation from '../containers/Geolocation';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.App}>
        <Geolocation />
      </div>
    </div>
  );
}
