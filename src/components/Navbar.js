import React from "react";
import { Navbar as Nav, Button, Menu, Divider } from "react-daisyui";
import { MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar(props) {
  return (
    <>
      <Nav className="bg-base-100">
        <Nav.End className="navbar-end">
          <ThemeSwitch themes={props.themes} />
        </Nav.End>
      </Nav>
    </>
  );
}
