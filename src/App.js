import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

// Routes Pages
import About from "./Pages/About";
import Home from "./Pages/Home";
import Van from "./Pages/Van";
import VanDetails from "./Pages/VanDetails";
import Layout from "./Layout/Layout";

// Host Routes Pages
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Review from "./Pages/Host/Review";
import HostLayout from "./Layout/HostLayout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Van />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="host/income" element={<Income />} />
            <Route path="host/review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
