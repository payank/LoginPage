import React from 'react';
import PropTypes from 'prop-types';

const WaferMap = ({ data, width = 400, height = 400, dieSize = 10 }) => {
  const waferRadius = Math.min(width, height) / 2;

  const renderDies = () => {
    return data.map((die, index) => {
      // Convert percentage coordinates to absolute values
      const xPos = (die.x / 100) * width;
      const yPos = (die.y / 100) * height;

      // Check if within circular wafer boundaries
      const centerX = width / 2;
      const centerY = height / 2;
      const distance = Math.sqrt((xPos - centerX)**2 + (yPos - centerY)**2);

      if (distance > waferRadius) return null;

      return (
        <rect
          key={index}
          x={xPos - dieSize/2}
          y={yPos - dieSize/2}
          width={dieSize}
          height={dieSize}
          fill={getStatusColor(die.status)}
          stroke="#333"
          strokeWidth="0.5"
        />
      );
    });
  };

  // ... keep existing getStatusColor and propTypes ...
  const getStatusColor = (status) => {
    const statusColors = {
      pass: '#9b51e0',
      fail: '#9b51e0',
      untested: '#BDBDBD'
    };
    return statusColors[status] || '#FFFFFF';
  };

  return (
    <svg 
      width={width} 
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <circle
        cx={width/2}
        cy={height/2}
        r={waferRadius}
        fill="#ECEFF1"
        stroke="#607D8B"
        strokeWidth="2"
      />
      {renderDies()}
    </svg>
  );
};

WaferMap.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  dieSize: PropTypes.number
};

export default WaferMap;