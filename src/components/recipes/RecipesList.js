import React from "react"
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"

const RecipesList = ({recipes, editMode}) => {
    if(recipes <= 0) {
        return (
            <>
                <div className="mb-3">There are no recipes yet</div>
                <div><Link to="/create-recipe" className="btn btn-success">Create recipe</Link></div>
            </>
        )
    } else {
        return (
            <>
                {recipes && recipes.map(recipe => {
                    return (
                        <RecipeCard recipe={recipe} key={recipe.id} editMode={editMode}/>
                    )
                })}
              
            </>
        )
    }
}

export default RecipesList