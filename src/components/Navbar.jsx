import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#aaa234",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink> */}

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About Us</button>
    </div>
  );
};

export default Navbar;
