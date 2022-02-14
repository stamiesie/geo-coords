import React, { useEffect, useState } from 'react';
import Display from '../components/Display';
import Loading from '../components/Loading';

const Geolocation = () => {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const fetchLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const handleClick = () => {
    setLoading(true);
    fetchLocation();
  };

  if (loading) return <Loading />;

  return (
    <div>
      <Display latitude={lat} longitude={long} refreshClick={handleClick} />
    </div>
  );
};

export default Geolocation;
