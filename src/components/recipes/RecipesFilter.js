import React from "react"
import { useHistory } from "react-router-dom"
import { Form } from "react-bootstrap"
import { Col } from "react-bootstrap"

export const RecipesFilter = ({ path }) => {
    const history = useHistory();

    return (
        <Col sm={8}>
            <Form className="mb-4">
                <Form.Label>Sorting by: </Form.Label>
                <Form.Select defaultValue={"createdAt"} onInput={e => history.push(path + e.target.value)}>
                    <option value="title">Title</option>
                    <option value="createdAt">Date</option>
                    <option value="difficult">Difficult</option>
                    <option value="authorFirstName">First name</option>
                    <option value="authorLastName">Last name</option>
                </Form.Select>
            </Form>
        </Col>
    ) 
}

export default RecipesFilter

