import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";
import dashboardRoutes from "../../layouts/dashbordRoutes";

import logo from "../../assets/img/test.png";

const activeSidebartitle = (routeName) => {
  return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
};

function Sidebar({ color, image }) {
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="/dashboard-admin"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("../../assets/img/test.png")} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="/dashboard-admin">
            THE DIAMOND STORE
          </a>
        </div>
        <Nav>
          {dashboardRoutes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeSidebartitle(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
