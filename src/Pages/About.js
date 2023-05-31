import React from "react";
import img from "../Assests/image 54.png";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <div className="about-container">
      <img src={img} alt="A man Sitting on Van" className="about-img" />
      <div className="about-content-container">
        <h2 className="about-content">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="about-paragraph">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="explore-van-wrapper">
          <h3 className="explore-box-content">
            Your destination is waiting. Your van is ready.
          </h3>
          <button className="Explore-van-button">
            <NavLink to="vans" className="about-link">
              Explore our vans
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
