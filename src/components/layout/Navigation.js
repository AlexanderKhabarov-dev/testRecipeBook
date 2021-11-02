import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from "react-redux"
import { logOutAction } from "../../store/actions/authActions"
import { Container, Navbar } from "react-bootstrap"
import "./nav.css"

const Navigation = ({logOut, authorized}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">
                    Recipe Book    
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {authorized ? <SignedOutLinks/> : <SignedInLinks logOut={logOut}/>}
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        authorized: state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)   