import { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Dropdown, Link, Text, Avatar } from "@nextui-org/react";

import { Layout } from "./Layout";
import { AcmeLogo } from "./AcmeLogo";
import { Navigate, Route, Routes } from "react-router-dom"


export const NavbarComponent = () => {
  const collapseItems = [
    "Inicio",
    "Buscar",
  ];

  const { pathname } = useLocation()

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand

      >
        <AcmeLogo />
        <Text b color="inherit">
          TRIPS
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="default"
        hideIn="xs"
        variant="underline"
      >
        <Navbar.Link isActive={pathname === '/perfil' ? true : false}>
          {/* <NavLink to="/perfil" className="nav-link">Inicio</NavLink> */}
          Inicio
        </Navbar.Link>

        <Navbar.Link isActive={pathname === '/usuarios' ? true : false}>
          Buscar
          {/* <NavLink to="/usuarios" className="nav-link">Buscar</NavLink> */}
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem
          activeColor="default"
          isActive={pathname === '/perfil' ? true : false}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%"
            }}
            className="nav-link"
            to='/perfil'
          >
            Inicio
            {/* <NavLink to="/perfil" className="nav-link">Inicio</NavLink> */}
          </Link>
        </Navbar.CollapseItem>
        {/* <Navbar.CollapseItem
          activeColor="default"
          isActive={pathname === '/usuarios' ? true : false}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%"
            }}
            className="nav-link"
          >
            <NavLink to="/usuarios" className="nav-link">Buscar</NavLink>
          </Link>
        </Navbar.CollapseItem> */}
      </Navbar.Collapse>
    </Navbar>
  )
}