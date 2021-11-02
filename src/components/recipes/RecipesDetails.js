import React from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import moment from "moment"

const RecipesDetails = ({ recipe }) => {
    if(recipe) {
        return(
            <Container className="mb-5">
                <Row>
                    <Col sm={8}>
                        <h1 className="mt-4 mb-4">{recipe.title}</h1>
                        <p> 
                            <b>Author:</b> {recipe.authorFirstName} {recipe.authorLastName}<br/>
                            <b>Created:</b> {moment(recipe.createdAt.toDate().toString()).calendar()}
                        </p>
                        <img src={recipe.imageUrl} className="card-img-top mb-3" alt=""/>
                        <p>{recipe.description}</p>
                        <div className="difficult mb-3">
                            <b>Difficult:</b> {recipe.difficult} of 5
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <p><b>Ingredients:</b><br/></p>
                        <ListGroup variant="flush">
                            {recipe && recipe.ingredients.map((element, index) => {
                                return (
                                    <ListGroup.Item key={index}>
                                        {index + 1}.
                                        &nbsp;{element.ingredient}
                                        &nbsp;{element.alternativeIngredient !== "" ? `(alternative - ${element.alternativeIngredient})` : null}
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <p><b>Steps:</b><br/></p>
                        <ListGroup variant="flush">
                            {recipe && recipe.steps.map((element, index) => {
                                return (
                                    <ListGroup.Item key={index}>
                                        {index + 1}.
                                        &nbsp;{element.step}
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <div className="container">
                <span>Loading... </span>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    const { recipes } = state.firestore.data
    const recipe  = recipes ? recipes[id] : null

    return {
        recipe,
    }
}

export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([{collection: 'recipes'}])
)(RecipesDetails)