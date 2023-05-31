import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function HostLayout() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/host">Dashboard</Link>
          </li>
          <li>
            <Link to="host/income">Income</Link>
          </li>
          <li>
            <Link to="host/review">Review</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}
