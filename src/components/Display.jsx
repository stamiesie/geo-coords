import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({ latitude, longitude, refreshClick }) => (
  <div className={styles.sectionContainer}>
    <div className={styles.sectionCard}>
      <section aria-label="coordinates">
        Your current Geo-coordinates are:
        <p>Latitude: {latitude}°</p>
        <p>Longitude: {longitude}°</p>
      </section>
      <button type="button" aria-label="refresh" onClick={refreshClick}>
        &#10148; Refresh Location
      </button>
    </div>
  </div>
);

Display.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  refreshClick: PropTypes.func.isRequired,
};

export default Display;
