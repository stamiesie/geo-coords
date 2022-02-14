import React from 'react';
import loading from '../assets/spinner1.gif';
import styles from './Loading.module.css';

const Loading = () => (
  <div>
    <img
      src={loading}
      className={styles.loading}
      aria-label="Loading"
      alt="Loading..."
    />
  </div>
);

export default Loading;
