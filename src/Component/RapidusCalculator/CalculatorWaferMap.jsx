import WaferMap from "./WaferMap";
import React, { useState, useMemo } from "react";
import Rapidus_logo from "../../Assets/Images/Rapidus_logo.png";

const getDieStatus = (distance, maxRadius) => {
  const failProbability = Math.min(1, (distance / maxRadius) * 1.5);
  return Math.random() < failProbability ? "fail" : "pass";
};
const PIXEL_TO_MM = 0.1;
const generateDies = (params) => {
  const MM_TO_PIXEL = 10;

  const {
    waferSize,
    dieWidth,
    dieHeight,
    xScribeWidth,
    yScribeWidth,
    waferEdgeExclusion,
  } = params;

  const data = [];
  const radius = waferSize / 2;
  const effectiveRadius = radius - waferEdgeExclusion;

  const diePitchX = dieWidth + xScribeWidth;
  const diePitchY = dieHeight + yScribeWidth;
  const cols = Math.floor(waferSize / diePitchX);
  const rows = Math.floor(waferSize / diePitchY);

  const startX = (waferSize - (cols * diePitchX - xScribeWidth)) / 2;
  const startY = (waferSize - (rows * diePitchY - yScribeWidth)) / 2;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = startX + col * diePitchX + dieWidth / 2;
      const y = startY + row * diePitchY + dieHeight / 2;

      const xPercent = (x / waferSize) * 100;
      const yPercent = (y / waferSize) * 100;

      const dx = x - radius;
      const dy = y - radius;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= effectiveRadius) {
        data.push({
          x: xPercent,
          y: yPercent,
          status: getDieStatus(distance, effectiveRadius),
        });
      }
    }
  }
  return data;
};

const CalculatorWaferMap = () => {
  const MM_TO_PIXEL = 10;

  const [params, setParams] = useState({
    waferSize: 400,
    dieWidth: 50,
    dieHeight: 50,
    xScribeWidth: 2,
    yScribeWidth: 2,
    waferEdgeExclusion: 20,
  });

  const [resultData, setResultData] = useState(() => generateDies(params));

  const generateWaferData = useMemo(() => generateDies(params), [params]);

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    const constraints = {
      waferSize: { min: 400, max: 500 },
      dieWidth: { min: 5, max: 1000 },
      dieHeight: { min: 5, max: 1000 },
      xScribeWidth: { min: 0, max: 20 },
      yScribeWidth: { min: 0, max: 20 },
      waferEdgeExclusion: { min: 0, max: 200 },
    };

    if (name === "waferSize") {
      const inches = parseInt(value);
      const pixels = inches === 8 ? 400 : 500;
      setParams((prev) => ({ ...prev, [name]: pixels }));
    } else if (name === "dieWidth" || name === "dieHeight") {
      const mmValue = parseFloat(value);
      const pixelValue = Math.round(mmValue * MM_TO_PIXEL);
      setParams((prev) => ({
        ...prev,
        [name]: Math.max(
          constraints[name].min,
          Math.min(constraints[name].max, pixelValue)
        ),
      }));
    } else {
      setParams((prev) => ({
        ...prev,
        [name]: Math.max(
          constraints[name].min,
          Math.min(
            constraints[name].max,
            parseInt(value) || constraints[name].min
          )
        ),
      }));
    }
  };

  return (
    <div className="container-design">
      <div className="left-panel">
        <h2>Gross Die Estimate / MFU Estimate</h2>

        <label>Wafer Size</label>
        <div className="input-group">
          <select
            name="waferSize"
            value={params.waferSize === 400 ? 8 : 12}
            onChange={handleParamChange}
          >
            <option value={8}>8" (400px)</option>
            <option value={12}>12" (500px)</option>
          </select>
          <span>inches</span>
        </div>

        <label>Die Width</label>
        <div className="input-group">
          <input
            type="number"
            name="dieWidth"
            value={params.dieWidth / MM_TO_PIXEL}
            onChange={handleParamChange}
            min="5"
            max="1000"
            step="1"
          />
          <span>mm</span>
        </div>

        <label>Die Height</label>
        <div className="input-group">
          <input
            type="number"
            name="dieHeight"
            value={(params.dieHeight / MM_TO_PIXEL).toFixed(0)}
            onChange={handleParamChange}
            min="5"
            max="1000"
            step="1"
          />
          <span>mm</span>
        </div>

        <label>Y Scribe</label>
        <div className="input-group">
          <input
            type="number"
            name="yScribeWidth"
            value={params.yScribeWidth}
            onChange={handleParamChange}
            min="0"
            max="20"
          />
          <span>px</span>
        </div>

        <label>Edge Exclusion</label>
        <div className="input-group">
          <input
            type="number"
            name="waferEdgeExclusion"
            value={params.waferEdgeExclusion}
            onChange={handleParamChange}
            min="0"
            max="200"
          />
          <span>px</span>
        </div>
        <button className="calculate" onClick={() => setResultData(generateWaferData)}>
          Calculate
        </button>

        <label>Gross Die</label>
        <div className="input-group">
          <input
            type="text"
            value={`${resultData.length} pcs`}
            readOnly
          />
          <span>pcs</span>
        </div>

        <label>MFU</label>
        <div className="input-group">
          <input type="text" value="85%" readOnly />
        </div>
      </div>

      <div className="right-panel">
        <p className="dpw">
        DPW ({params.waferSize === 400 ? '8"' : '12"' }): {params.waferSize}
      </p>
        <WaferMap
        data={resultData}
        width={params.waferSize}
        height={params.waferSize}
        dieWidth={params.dieWidth}
        dieHeight={params.dieHeight}
      />
        <div className="rapidus-logo">
          <img src={Rapidus_logo} alt="Rapidus" height="30" />
        </div>
        <a href="#" download className="download-link">Download the Map</a>
      </div>
    </div>
  );
};

export default CalculatorWaferMap;
