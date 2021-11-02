import React, { forwardRef, useState, useEffect } from "react"
import { Form } from "react-bootstrap"

export const UploadImageInput = forwardRef(({label, errorMessage, name, type}, ref) => {
    const [requiredFlag, setRequiredFlag] = useState(false)

    useEffect(() => {
       if(type === "create") {
           setRequiredFlag(true)
       }
    },[type])

    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{label}{type === "create" ? <sup className="text-danger">*</sup> : null}</Form.Label>
            <Form.Control  
                type="file" 
                {...ref(name, {required: requiredFlag})}/>
            <span><small className="text-danger">{errorMessage}</small></span>
        </Form.Group>
    )
})

export default UploadImageInput