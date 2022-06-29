import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import {useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./login-button";
import LogoutButton from "./logout-button"
import SignupButton from './signup-button';
import logo from '../assets/bundle-logo.jpg'


const MainNav = () => (
  <Nav className="nav-center">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home 
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/about"
      exact
      activeClassName="router-link-exact-active"
    >
      About
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/form"
      exact
      activeClassName="router-link-exact-active"
    >
      Forms
    </Nav.Link>
<Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav classname="justify-content-end">
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        <SignupButton/>

    </Nav>
  )
}

const NavBar = () => {
  return (

    <Navbar bg="light" expand="md">
      <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='bundle-logo' width={65} height={65} />
          </Link>
      </div>    
        <MainNav />
        <AuthNav />
    </Navbar>

  );
};

export default NavBar;
