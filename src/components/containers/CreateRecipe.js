import React from "react"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux";
import { createRecipeAction } from '../../store/actions/recipeActions'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import FormRecipe from "../recipes/FormRecipe"

const defaultValues = {
    recipe: {
        title: "",
        description: "", 
        difficult: "1",
        image: "",
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

export const CreateRecipe = ( props ) => {
    if(props.authorized) return <Redirect to="/signin"/>

    return (
        <FormRecipe 
            title={"Create Recipe"} 
            {...props} 
            defaultValues={defaultValues}
            type={"create"}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createRecipeAction: recipe => dispatch(createRecipeAction(recipe)),
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    const { recipes } = state.firestore.data
    const recipe  = recipes ? recipes[id] : null

    return {
        authorized: state.firebase.auth.isEmpty,
        recipe,
    }
}

export default compose(
    connect(mapStateToProps,  mapDispatchToProps),
    firestoreConnect([{collection: "recipes"}])
)(CreateRecipe)