import React from "react"
import { NavLink } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"

const SignedOutLinks = () => {
    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink to='/all-recipes' className="nav-link">All recipes</NavLink>
            </Nav>
            <Nav>
                <NavLink to="/signUp" className="btn btn-primary m-1">Sign up</NavLink>
                <NavLink to="/signin" className="btn btn-success m-1">Log in</NavLink>
            </Nav>
        </Navbar.Collapse> 
    )
}

export default SignedOutLinks