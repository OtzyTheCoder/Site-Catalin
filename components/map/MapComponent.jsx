import React from 'react';

function MapComponent({ location }) {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        title="Google Map"
        src={location}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapComponent;