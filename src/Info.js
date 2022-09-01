import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div className="Info">
      <span>
        <strong>Humidity</strong> 00%
      </span>
      <br />
      <span>
        <strong>Wind</strong> 00m/s
      </span>
      <br />
      <span>
        <strong>Pressure</strong> 0hPa
      </span>
    </div>
  );
}
