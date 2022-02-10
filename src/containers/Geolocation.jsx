import React, { useEffect, useState } from 'react';
import Display from '../components/Display';
import Loading from '../components/Loading';

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
    console.log('Fetch on mount');
    fetchLocation();
  }, []);

  const handleClick = () => {
    fetchLocation();
    console.log('Fetch on click');
  };

  return (
    <div>
      {typeof lat !== 'undefined' ? (
        <Display latitude={lat} longitude={long} refreshClick={handleClick} />
      ) : (
        <Loading />
      )}
      {/* // return{' '}
      <Display latitude={lat} longitude={long} refreshClick={handleClick} />; */}
    </div>
  );
};

export default Geolocation;
