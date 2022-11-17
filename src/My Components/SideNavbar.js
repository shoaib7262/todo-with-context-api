import React from "react";
import { Link } from "react-router-dom";

import Picture from "./Picture";
import './style.css';

const SideNavbar = () => {
  return (
    <div >
      <div className="sideNavbar">
        <Picture />
        <Link to='/' className="btn button  ">
          <i className="fa-solid fa-tag"></i> My Day
        </Link>

        <Link to='/important' className="btn button  ">
          <i className="fa-solid fa-tag"></i> Important
        </Link>

        <Link to='/donetask' className="btn button  ">
          <i className="fa-solid fa-tag"></i> Done Task
        </Link>

        <Link to='/comingtask' className="btn button  ">
          <i className="fa-solid fa-tag"></i> Coming Task
        </Link>

        <hr />
        <Link to='/addtask' className="addNew mx-2"  >
          <i className="fa-regular fa-plus"></i>New Task
        </Link>
      </div>

    </div>
  );
};

export default SideNavbar;