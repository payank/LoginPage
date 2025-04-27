import React, { useState, useMemo } from 'react';
import WaferMap from './WaferMap';
import './CalculatorWaferMap.css';

const getDieStatus = (distance, maxRadius) => {
  // Example failure pattern - radial probability
  const failProbability = Math.min(1, (distance / maxRadius) * 1.5);
  return Math.random() < failProbability ? 'fail' : 'pass';
};
const CalculatorWaferMap = () => {
  const MM_TO_PIXEL = 10; 

  const [params, setParams] = useState({
    waferSize: 400,
    dieWidth: 50,
    dieHeight: 50,
    xScribeWidth: 2,
    yScribeWidth: 2,
    waferEdgeExclusion: 20
  });

  const PIXEL_TO_MM = 0.1;
  const generateWaferData = useMemo(() => {
    const { 
      waferSize,
      dieWidth,
      dieHeight,
      xScribeWidth,
      yScribeWidth,
      waferEdgeExclusion
    } = params;

    const data = [];
    const radius = waferSize / 2;
    const effectiveRadius = radius - waferEdgeExclusion;
    
    // Calculate grid parameters
    const diePitchX = dieWidth + xScribeWidth;
    const diePitchY = dieHeight + yScribeWidth;
    const cols = Math.floor(waferSize / diePitchX);
    const rows = Math.floor(waferSize / diePitchY);
    
    // Center the grid
    const startX = (waferSize - (cols * diePitchX - xScribeWidth)) / 2;
    const startY = (waferSize - (rows * diePitchY - yScribeWidth)) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * diePitchX + dieWidth/2;
        const y = startY + row * diePitchY + dieHeight/2;
        
        // Convert to percentage coordinates
        const xPercent = (x / waferSize) * 100;
        const yPercent = (y / waferSize) * 100;
        
        // Check if within effective radius
        const dx = x - radius;
        const dy = y - radius;
        const distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance <= effectiveRadius) {
          data.push({
            x: xPercent,
            y: yPercent,
            status: getDieStatus(distance, effectiveRadius)
          });
        }
      }
    }
    return data;
  }, [params]);

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    const constraints = {
      waferSize: { min: 400, max: 500 },
      dieWidth: { min: 5, max: 1000 },  // Keep in pixels
      dieHeight: { min: 5, max: 1000 }, // Keep in pixels
      xScribeWidth: { min: 0, max: 20 },
      yScribeWidth: { min: 0, max: 20 },
      waferEdgeExclusion: { min: 0, max: 200 }
    };
  
    if(name === 'waferSize') {
      const inches = parseInt(value);
      const pixels = inches === 8 ? 400 : 500; 
      setParams(prev => ({ ...prev, [name]: pixels }));
    } else if(name === 'dieWidth' || name === 'dieHeight') {
      // Convert mm input to pixels
      const mmValue = parseFloat(value);
      const pixelValue = Math.round(mmValue * MM_TO_PIXEL);
      setParams(prev => ({
        ...prev,
        [name]: Math.max(
          constraints[name].min,
          Math.min(constraints[name].max, pixelValue)
        )
      }));
    } else {
      setParams(prev => ({
        ...prev,
        [name]: Math.max(
          constraints[name].min,
          Math.min(constraints[name].max, parseInt(value) || constraints[name].min)
        )
      }));
    }
  }

  return (
    <div className="wafer-controls">
      <div className="param-grid">
        {/* Wafer Parameters */}
        <label>
  Wafer Size (inches):
  <select
    name="waferSize"
    value={params.waferSize === 400 ? 8 : 12} // Convert pixels back to inches
    onChange={handleParamChange}
  >
    <option value={8}>8" (400px)</option>
    <option value={12}>12" (500px)</option>
  </select>
</label>

        {/* Die Parameters */}
        <label>
  Die Width (mm):
  <input 
    type="number" 
    name="dieWidth" 
    value={(params.dieWidth / MM_TO_PIXEL)}
    onChange={handleParamChange}
    min="5"  // 5mm minimum (0.5mm * 10 = 5px)
    max="1000"    // 100px maximum (10mm * 10 = 100px
    step="1"
  />
</label>
        
<label>
  Die Height (mm):
  <input 
    type="number" 
    name="dieHeight" 
    value={(params.dieHeight / MM_TO_PIXEL).toFixed(0)}
    onChange={handleParamChange}
    min="5"
    max="1000"
    step="1"
  />
</label>
        
        <label>
          Y Scribe (px):
          <input type="number" name="yScribeWidth" 
            value={params.yScribeWidth} onChange={handleParamChange}
            min="0" max="20" />
        </label>

        {/* Edge Exclusion */}
        <label>
          Edge Exclusion (px):
          <input type="number" name="waferEdgeExclusion" 
            value={params.waferEdgeExclusion} onChange={handleParamChange}
            min="0" max="200" />
        </label>


<div className="die-info-group">
  <label>
    Die Size:&nbsp;&nbsp;
      { (
        params.dieWidth * PIXEL_TO_MM * 
        params.dieHeight * PIXEL_TO_MM
      ).toFixed(2)} mm²

  </label>

  <label>
    Die Count:&nbsp;&nbsp;
      {/* {generateWaferData.length} dies */}
      <input type="text" name="waferEdgeExclusion" 
            value={`${generateWaferData.length} pcs`} onChange={handleParamChange}
            readOnly />
  </label>
</div>

      </div>

      <WaferMap 
        data={generateWaferData}
        width={params.waferSize}
        height={params.waferSize}
        dieWidth={params.dieWidth}
        dieHeight={params.dieHeight}
      />
    </div>
  );
};

export default CalculatorWaferMap;