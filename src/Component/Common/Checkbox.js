import React from "react";

const Checkbox = ({ label }) => {
  return (
    <label>
      <input
        type="checkbox"
        style={{
          accentColor: "#00401a",
        }}
      />{" "}
      {label}
    </label>
  );
};

export default Checkbox;