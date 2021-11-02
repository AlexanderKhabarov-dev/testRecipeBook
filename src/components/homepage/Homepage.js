import React from "react";
import { Link } from "react-router-dom"
import "./homepage.css"

export const Homepage = () => {

    return (
        <div className="homepage">
            <Link to="/all-recipes" className="btn btn-success homepage-link">Go to all recipes</Link>
        </div>
    )
}

export default Homepage