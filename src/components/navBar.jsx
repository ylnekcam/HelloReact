
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact> Home </NavLink>
          <NavLink to="/embedingExpression"> Embeding Expression </NavLink>
          <NavLink to="/settingAttributes"> Set Attributes </NavLink>
          <NavLink to="/renderClassDinamic"> Render Class Dinamic </NavLink>
          <NavLink to="/renderList"> Render List </NavLink>
          <NavLink to="/handlingEvents"> handle events </NavLink>
          
        </nav>
      </div>
    </header>
  );
}
