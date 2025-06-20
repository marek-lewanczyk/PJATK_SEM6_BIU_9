import './App.css'
import {NavLink, Outlet} from "react-router";

function App() {
  return (
    <>
        <h1>Hello World!</h1>
        <nav className="nav">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/NIE_MA_TAKIEGO_ROUTINGU">NIE MA TAKIEGO ROUTINGU</NavLink>
        </nav>
        <Outlet />
    </>
  )
}

export default App
