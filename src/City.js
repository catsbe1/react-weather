import React, { useState } from "react";
import "./City.css";

export default function City() {
  let [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It's 20° in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <>
      <div className="Form">
        <form className="change-city" id="search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search City"
            id="city"
            onChange={updateCity}
          />
          <input type="submit" placeholder="submit" />
        </form>
        <h2>{message}</h2>
      </div>
    </>
  );
}
