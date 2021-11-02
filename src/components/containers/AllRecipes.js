
import React, { Component } from "react"
import RecipesList from "../recipes/RecipesList"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import RecipesFilter from "../recipes/RecipesFilter"
import { Container, Row } from "react-bootstrap"

class AllRecipes extends Component {
    render() {
        const { recipes } = this.props
        return (
            <Container className="mt-4">
                <Row>
                    <h1 className="mb-4">All recipes </h1>
                    <RecipesFilter
                        path={"/all-recipes/"}
                    />
                    <RecipesList 
                        recipes={recipes} 
                        editMode={false}
                    />
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        recipes: state.firestore.ordered.recipes,
        data: state.firebase,
    }
}
    
export default compose(
    firestoreConnect(props => {
        let { sorting } = props.match.params

        if(!sorting) sorting = "createdAt"
        if(sorting === "createdAt") sorting = ["createdAt", "desc"]

        return [
            { 
                collection: "recipes",
                orderBy: [sorting],
            },  
        ]
    }),
    connect(mapStateToProps),
)(AllRecipes)

