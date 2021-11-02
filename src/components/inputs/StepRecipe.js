import React, { forwardRef } from "react";
import { Form, Button, Row, Col, CloseButton } from "react-bootstrap"
import { useFieldArray } from "react-hook-form"

export const StepsField = forwardRef(({ control, errors, errorText, } ,ref) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "steps"
    })
    
    return (
        <>
        {fields.map((item, index) => {
            return (
                <div key={item.id}>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col xs={10}>
                                <Form.Control 
                                    {...ref(`steps[${index}].step`, 
                                    {required: errorText})} 
                                    className="mb-2" 
                                    as={"textarea"} 
                                    placeholder={`step ${index + 1}`}
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
                                {errors.steps && errors.steps[index] ? errors.steps[index].step.message : null}
                            </small>
                        </span>
                    </Form.Group>
                </div>
            )
        })}
    
        <Form.Group className="mb-3">
            <Button type="button" variant="success" onClick={() => append({})}> Add Step </Button>
        </Form.Group>
        </>
    )
})

export default StepsField