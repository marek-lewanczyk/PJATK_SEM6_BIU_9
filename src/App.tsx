import React from "react";
import "./App.css";
import { NavLink, Outlet } from "react-router";
import WelcomeMessage from "./components/WelcomeMessage.tsx";

function App() {
  return (
    <>
      <WelcomeMessage name="Marek">
        <p>This is a custom message just for you.</p>
      </WelcomeMessage>
      <nav className="nav">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/NIE_MA_TAKIEGO_ROUTINGU">NIE MA TAKIEGO ROUTINGU</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
