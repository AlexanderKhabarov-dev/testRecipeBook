import React from "react"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { editRecipeAction } from "../../store/actions/recipeActions"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import FormRecipe from "../recipes/FormRecipe"

const defaultValues = {
    recipe: {
        title: "",
        description: "",
        difficult: ""
    },
    ingredients: [
        {   
            id: 1,
            ingredient: "",
            alternativeIngredient: ""
        }  
    ],
    steps: [
        {
            id: 1,
            step: ""
        }
    ],
}

export const EditRecipe = (props) => {
    if(props.authorized) return <Redirect to="/signin"/>

    return (
        <FormRecipe 
            title={"Edit Recipe"} 
            {...props} 
            defaultValues={defaultValues}
            type={"edit"}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editRecipeAction: (recipe, id) => dispatch(editRecipeAction(recipe, id)),
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    const { recipes } = state.firestore.data
    const recipe  = recipes ? recipes[id] : null

    return {
        authorized: state.firebase.auth.isEmpty,
        recipe,
        id,
    }
}

export default compose(
    connect(mapStateToProps,  mapDispatchToProps),
    firestoreConnect([{collection: "recipes"}])
)(EditRecipe)