import React from 'react';
import '../src/css/Marker.css';

//covid case marker function
const Circle = (props) => {
    const { color, name, id } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Circle;