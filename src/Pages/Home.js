import React from "react";
import backgroundImage from "../Assests/image 53.png";
export default function Home() {
  return (
    <div className="container-img">
      <img src={backgroundImage} alt="background hero" className="hero-img" />
      <div className="hero-content">
        <h2 className="hero-subheading">
          You got the travel plans, we got the travel vans.
        </h2>
        <p className="hero-paragraph">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="btn-plan">Find Your Plan</button>
      </div>
    </div>
  );
}
