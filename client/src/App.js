import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 35,
    longitude: -95,
    zoom: 3,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/nuggetnchill/ckhcmthgi0n1419o5raelji1w'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
    />
  );
};

export default App;
