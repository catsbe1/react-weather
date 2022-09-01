import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast" id="forecast">
      <div className="container d-flex justify-content-around">
        <div className="row top d-flex justify-content-around">
          <div className="col-md-4 text-center day">Thursday</div>
          <div className="col-md-4 text-center day">Friday</div>
          <div className="col-md-4 text-center day">Saturday</div>
          <div className="row middle">
            <div className="col-md-4 text-center">
              <i className="fa-solid fa-cloud-sun icon"></i>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa-solid fa-cloud-sun icon"></i>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa-solid fa-cloud-sun icon"></i>
            </div>
          </div>
          <div className="row bottom">
            <div className="col-md-4 text-center">15°/25°</div>
            <div className="col-md-4 text-center">15°/25°</div>
            <div className="col-md-4 text-center">15°/25°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
