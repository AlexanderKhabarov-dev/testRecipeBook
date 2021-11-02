import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import { connect } from "react-redux"
import { Col, Card} from "react-bootstrap"

const RecipeCard = ({ recipe, editMode}) => {
    return (
        <Col sm={8}>
            <Card className="mb-3">
                <Card.Img variant="top" src={recipe.imageUrl} style={{ height: "300px", objectFit: "cover"}}/>
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <Card.Text>
                        <span><b>ingredients:</b></span><br/>
                        {recipe && recipe.ingredients.map(elem => `${elem.ingredient}, `)}
                    </Card.Text>
                    <Card.Text><b>difficult:</b> {recipe.difficult} of 5</Card.Text>
                    <small className="text-muted">
                        сreated: {moment(recipe.createdAt.toDate().toString()).calendar()}
                    </small><br/>
                    <small className="text-muted">
                        author: {recipe.authorFirstName} {recipe.authorLastName}
                    </small><br/>
                    <div className="d-flex justify-content-between mt-3">
                        <Link  to={`/recipe/${recipe.id}`} className="btn btn-primary">Learn more</Link>
                        {editMode ? <Link  to={`/edit-recipe/${recipe.id}`} className="btn btn-success" >Edit</Link> : null}
                    </div>
                </Card.Body>
             </Card>
        </Col>
    ) 
}

const mapStateToProps = state => {
    return {
        uid: state.firebase.auth.uid,
    }
}

export default connect(mapStateToProps)(RecipeCard)