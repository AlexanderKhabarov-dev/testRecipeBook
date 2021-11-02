import React, { forwardRef } from "react"
import { Form, Button, Row, Col, CloseButton } from "react-bootstrap"
import { useFieldArray } from "react-hook-form"

export const IngredientFields = forwardRef(({control, errorText, errors}, ref) => {
    
    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients"
    })
    
    return (
        <>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col xs={5}>
                                    <Form.Control 
                                        {...ref(`ingredients[${index}].ingredient`, {required: errorText})} 
                                        type={"text"} 
                                        placeholder="ingredient"
                                    />
                                </Col>
                                <Col xs={5}>
                                    <Form.Control 
                                    {...ref(`ingredients[${index}].alternativeIngredient`)} 
                                    type={"text"} 
                                    placeholder="alternativeIngredent"
                                />
                                </Col>
                                <Col xs={2}>
                                    <div className="d-flex align-items-center">
                                        {fields.length > 1 ? <CloseButton onClick={() => remove(index)}/> : null}
                                    </div>
                                </Col>
                            </Row>
                            <span>
                                <small className="text-danger">
                                    {errors.ingredients && errors.ingredients[index] ? errors.ingredients[index].ingredient.message : null}
                                </small>
                            </span>
                        </Form.Group>
                    </div>
                )
            })}
        
            <Form.Group className="mb-3">
                <Button type="button" variant="success" onClick={() => append({})}> 
                    Add ingredient 
                </Button>
            </Form.Group>
        </>
    )
})

export default IngredientFields