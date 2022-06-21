import React from "react";
import { NavLink } from "react-router-dom";
import planet from "../images/planet.png";
import "./NavBar.css";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        };
    };

    return (
        <div className="navBar-container d-flex">
            <div className="logo-container d-flex">
                <img src={planet} />
                <h2>Space Travelers' Hub</h2>
            </div>
            <nav>
                <NavLink style={navLinkStyles} to="/">
                    {" "}
                    Rockets
                </NavLink>
                <NavLink style={navLinkStyles} to="/Missions">
                    {" "}
                    Missions
                </NavLink>
                <NavLink className="profile" style={navLinkStyles} to="/Profile">
                    {" "}
                    Profile
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
