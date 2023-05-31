import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { vanActions } from "../Store/VanSlice";
/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */

import { NavLink } from "react-router-dom";

export default function Vans() {
  // Vans Item of Store
  const dispatch = useDispatch();
  const { vansItem } = useSelector((state) => state.van);
  // mapping Elements
  /// filterItem Function

  const vanElements = vansItem.map((van) => (
    <div key={van.id} className="van-tile">
      <NavLink
        to={`/vans/${van.id}`}
        onClick={() => {
          dispatch(vanActions.findItemDetails(van.id));
        }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </NavLink>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
