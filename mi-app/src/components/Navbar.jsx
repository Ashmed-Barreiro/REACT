import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (()=>{
    setIsOpen((prev)=>!prev)
    //console.log(isOpen)
  }) 


  return (
    <nav className="nav">
      <ul id="main-menu" className={isOpen ? "nav-links open" : "nav-links"}>
      <li><NavLink onClick={()=>setIsOpen(false)} to="/" end>Home</NavLink></li>
      <li><NavLink onClick={()=> setIsOpen(false)} to="/users">Users</NavLink></li>
      <li><NavLink onClick={()=> setIsOpen(false)} to="/contact">Contact</NavLink></li>
      </ul>
      <button aria-controls="main-menu" aria-expanded={isOpen} className="nav-toggle" onClick={toggle} >☰</button>
    </nav>
  );
}
  