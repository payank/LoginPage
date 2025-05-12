import React, { useState } from "react";
import "./CalculatorWaferMap.css";
import graph from '../../Assets/Images/Graph.jpg';
import Rapidus_logo from "../../Assets/Images/Rapidus_logo.png";

const CalculatorWaferMap = () => {
  const [dieWidth, setDieWidth] = useState(10);
  const [dieHeight, setDieHeight] = useState(10);
  const [grossDie, setGrossDie] = useState(624);
  const [mfu, setMfu] = useState("85%");
  const dpw = 505;

  const calculateDie = () => {
    const waferRadius = 150;
    const waferArea = Math.PI * waferRadius * waferRadius;

    const dieArea = dieWidth * dieHeight;
    const grossDies = Math.floor(waferArea / dieArea);
    const usableDies = Math.floor(grossDies * 0.85);

    const mfuPercent = Math.round((usableDies / grossDies) * 100);

    setGrossDie(grossDies);
    setMfu(`${mfuPercent}%`);
  };


  return (
    <div className="container-design">
      <div className="left-panel">
        <h2>Gross Die Estimate / MFU Estimate</h2>

        <label>Die Width</label>
        <div className="input-group">
          <input
            type="number"
            value={dieWidth}
            onChange={(e) => setDieWidth(+e.target.value)}
          />
          <span>mm</span>
        </div>

        <label>Die Height</label>
        <div className="input-group">
          <input
            type="number"
            value={dieHeight}
            onChange={(e) => setDieHeight(+e.target.value)}
          />
          <span>mm</span>
        </div>

        <button onClick={calculateDie}>Calculate</button>

        <label>Gross Die</label>
        <div className="input-group">
          <input type="text" value={grossDie} readOnly />
          <span>pcs</span>
        </div>

        <label>MFU</label>
        <div className="input-group">
          <input type="text" value={mfu} readOnly />
        </div>
      </div>

      <div className="right-panel">
        <p className="dpw">DPW (12”): {dpw}</p>
        <img src={graph} alt="Wafer Map" className="wafer-image" />
        <div className="rapidus-logo">
          <img src={Rapidus_logo} alt="Rapidus" height="30" />
        </div>
        <button
          onClick={() => {

          }}
          className="download-link"
          style={{ color: "#3b82f6", textDecoration: "none", background: "none", border: "none", cursor: "pointer" }}
        >
          Download the Map
        </button>
      </div>
    </div>
  );
};

export default CalculatorWaferMap;
