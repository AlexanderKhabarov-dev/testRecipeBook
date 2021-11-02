import React  from "react"
import { connect } from "react-redux"
import { signInAction } from "../../store/actions/authActions"
import { Redirect } from "react-router"
import { Container, Row, Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import TextInput from "../inputs/TextInput"

export const SignIn = ({signInAction, auth}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    })

    const onSubmit = data => signInAction(data)

    if(!auth) return <Redirect to="/"/>
       
    return (
        <Container className="mt-5">
            <Row sm={3} className="justify-content-md-center">
                <Form onSubmit={handleSubmit(onSubmit)} className="border border-secondary p-3">
                    <TextInput
                        ref={register}
                        label={"Email address"}
                        type={"email"}
                        name={"email"}
                        placeholder={"Enter email"}
                        errorText={"Email is a required field"}
                        error={errors.email?.message}
                    />
                    <TextInput
                        ref={register}
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                        placeholder={"Enter password"}
                        errorText={"Password is a required field"}
                        error={errors.password?.message}
                    />
                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="mb-3">
                        Login
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth.isEmpty,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInAction: credentails => dispatch(signInAction(credentails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
