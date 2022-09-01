import "./App.css";

import "./styles.css";
import City from "./City";
import Forecast from "./Forecast";
import Coder from "./Coder";
import Info from "./Info";

export default function App() {
  return (
    <div className="App">
      <div className="container main">
        <h1>Weather Forecast</h1>
        <h5>Wednesday, May 4th 2022</h5>

        <City />
        <div className="City">
          <section className="today-wrap">
            <br />
            <div className="container d-flex justify-content-around">
              <div className="row">
                <div className="col-md-6">
                  <div id="icon">
                    <i className="fa-solid fa-cloud-sun"></i>
                  </div>
                  <div className="today-description">Sunny</div>
                </div>
                <div className="col-md-6">
                  <br />
                  <Info />
                </div>
              </div>
            </div>
          </section>
        </div>
        <h3>3 Day Forecast</h3>
        <br />
        <Forecast />
        <Coder />
      </div>
    </div>
  );
}
