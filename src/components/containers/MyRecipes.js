import React from "react"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import RecipesList from "../recipes/RecipesList"
import { Container, Row } from "react-bootstrap"

const MyRecipes = ({ recipes }) => {
    return (
        <Container className="mt-4">
            <Row>
                <h1 className="mb-4"> My recipes </h1>
                <RecipesList 
                    recipes={recipes}
                    headline={"My recipes"}
                    editMode={true}
                />
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.firestore.ordered.recipes,
        authorized: state.firebase.auth.isEmpty,
        uid: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        let { sorting } = props.match.params

        if(!sorting) sorting = "createdAt"

        return [
            {
                collection: "recipes",
                where: [["authorId", "==", props.uid]],
            }
        ]
    })
)(MyRecipes)