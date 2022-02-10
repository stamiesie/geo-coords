import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ latitude, longitude, refresh }) => (
  <div>
    Your current Geo-coordinates are:
    <p>Latitude: {latitude}</p>
    <p>Longitude: {longitude}</p>
    <button type="button" onClick={refresh}>
      &#10148; Refresh Location
    </button>
  </div>
);

Display.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  refresh: PropTypes.func.isRequired,
};
