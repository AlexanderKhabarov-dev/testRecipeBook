import { forwardRef } from "react"
import { Form } from "react-bootstrap"

export const TextInput = forwardRef(({label, errorText, error, placeholder, type, name, as, required}, ref) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}{required ? <sup className="text-danger">*</sup> : null}</Form.Label>
            <Form.Control
                as={as} 
                type={type} 
                placeholder={placeholder} 
                {...ref(name, { required: errorText })}
            />
            <span className="text-danger">
                <small> {error} </small>
            </span>
        </Form.Group>
    )
})

export default TextInput