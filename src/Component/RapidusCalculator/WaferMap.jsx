import React from 'react';
import PropTypes from 'prop-types';

const WaferMap = ({ data, width = 400, height = 400, dieSize = 10 }) => {
  const waferRadius = Math.min(width, height) / 2;

  const renderGradients = () => {
    return (
      <defs>
        {/* Cool-to-Warm Spectrum Gradient */}
        <linearGradient id="gradient-cool-to-warm-spectrum" gradientTransform="rotate(90)">
          <stop offset="0%" style={{ stopColor: 'rgb(255, 206, 236)', stopOpacity:1 }} />
          <stop offset="20%" style={{ stopColor: 'rgb(255, 206, 236)', stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: 'rgb(207, 42, 186)', stopOpacity: 0.7 }} />
          <stop offset="60%" style={{ stopColor: 'rgb(238, 44, 130)', stopOpacity: 0.5 }} />
          <stop offset="80%" style={{ stopColor: 'rgb(151, 120, 209)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(152, 150, 240)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    );
  };

  const renderDies = () => {
    return data.map((die, index) => {
      // Convert percentage coordinates to absolute values
      const xPos = (die.x / 100) * width;
      const yPos = (die.y / 100) * height;

      // Check if within circular wafer boundaries
      const centerX = width / 2;
      const centerY = height / 2;
      const distance = Math.sqrt((xPos - centerX) ** 2 + (yPos - centerY) ** 2);

      if (distance > waferRadius) return null;

      // Apply gradient to each chip
      const gradientFill = `url(#gradient-cool-to-warm-spectrum)`;

      return (
        <rect
          key={index}
          x={xPos - dieSize / 2}
          y={yPos - dieSize / 2}
          width={dieSize}
          height={dieSize}
          fill={gradientFill}
          stroke="#333"
          strokeWidth="0.5"
        />
      );
    });
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Outer Circle with Bold Stroke */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={waferRadius}
        fill="#ECEFF1"
        stroke="#607D8B"
        strokeWidth="2"
      />
      {renderGradients()}
      {renderDies()}
    </svg>
  );
};

WaferMap.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  dieSize: PropTypes.number,
};

export default WaferMap;