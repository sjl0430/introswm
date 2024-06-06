import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./pages.scss";

const Profs = () => {
  return (
    <div>
      <ul class="profsul">
        <ProfItem id={1} />
        <ProfItem id={2} />
        <ProfItem id={3} />
        <ProfItem id={4} />
        <ProfItem id={5} />
        <ProfItem id={486} />
      </ul>
      <Outlet />
    </div>
  );
};
function name (prop) {
    if(prop == 1) return "양태천";
    else if(prop == 2) return "성낙운";
    else if(prop == 3) return "홍석희";
    else if(prop == 4) return "지상문";
    else if(prop == 5) return "강인수";
    else return "김주현";
};
const ProfItem = ({ id }) => {
  const activeStyle = {
    color: "brown",
    fontSize: 22,
  };
  return (
    <b>
      <NavLink 
        to={`/Profs/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>{name(id)} 교수님</p>
      </NavLink>
    </b>
  );
};
export default Profs;
