import React from "react"
import { NavLink } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"

const SignedInLinks = ({logOut}) => {
    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/all-recipes" className="nav-link">All recipes</NavLink>
                <NavLink to="/my-recipes" className="nav-link">My recipes</NavLink>
                <NavLink to="/create-recipe" className="nav-link">New recipe</NavLink>
            </Nav>
            <Nav>
                <NavLink to="/" className="btn btn-primary m-1" onClick={logOut}>
                   Log out
                </NavLink>
            </Nav>
        </Navbar.Collapse> 
    )
}

export default SignedInLinks