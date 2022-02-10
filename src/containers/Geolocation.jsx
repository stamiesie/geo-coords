import React, { useEffect, useState } from 'react';
import Display from '../components/Display';

const Geolocation = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };
  useEffect(() => {
    fetchLocation();
    console.log('Fetch on mount');
  }, []);

  const handleClick = () => {
    fetchLocation();
    console.log('Fetch on click');
  };

  return <Display latitude={lat} longitude={long} refreshClick={handleClick} />;
};

export default Geolocation;
