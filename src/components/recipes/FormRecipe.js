import React, { useMemo } from "react"
import { useForm } from "react-hook-form"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import IngredientFields from "../inputs/IngredientFields"
import StepsField from "../inputs/StepRecipe"
import UploadImageInput from "../inputs/UploadImageInput"
import TextInput from "../inputs/TextInput"

export const FormRecipe = ( {recipe, title, defaultValues, type, createRecipeAction, editRecipeAction, id}) => {
    const {control, register, handleSubmit, reset, formState: {errors} } = useForm({
        defaultValues: useMemo(() => {
            if(recipe) {
                return {
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                    recipe: {
                        title: recipe.title,
                        description: recipe.description,
                        difficult: recipe.difficult
                    }
                }
            } else {
                return defaultValues
            }
        },[defaultValues, recipe]), 
        mode: "onBlur",
    })

    const onSubmit = data => {
        if(type === "create"){
            createRecipeAction(data)
            reset()
        } 
        else if(type === "edit"){
            editRecipeAction(data, id)
        } 
    }

    return (
        <>
            <Container className="mt-4">
                <Row >
                    <Col sm={8}> 
                    <h1 className="mb-4">{title}</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4 p-3 border">
                                <TextInput
                                    ref={register}
                                    label={"Title"}
                                    type={"text"}
                                    name={"recipe.title"}
                                    placeholder={"Enter title"}
                                    errorText={"Title is a required field"}
                                    error={errors.recipe?.title?.message}
                                    required={true}
                                />
                                <TextInput
                                    ref={register}
                                    label={"Description"}
                                    errorMessage={"This is a required field"}
                                    as={"textarea"}
                                    name={"recipe.description"}
                                    placeholder={"Enter description"}
                                    errorText={"Description is a required field"}
                                    error={errors.recipe?.description?.message}
                                    required={true}
                                />
                                <UploadImageInput 
                                    ref={register}
                                    label={"Upload File"}
                                    name={"recipe.image"}
                                    type={type}
                                />
                            </div>
                            <div className="mb-4 p-3 border">
                            <Form.Group className="mb-3">
                                <Form.Label>Select difficult<sup className="text-danger">*</sup></Form.Label>
                                <Form.Select defaultValue={"1"} {...register("recipe.difficult")}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Form.Group>
                            </div>
                            <div className="mb-4  p-3 border">
                                <h4 className="mb-3">Ingredients<sup className="text-danger">*</sup></h4>
                                <IngredientFields 
                                    control={control}
                                    ref={register} 
                                    errorText={"Ingredient is a required field"}
                                    errors={errors}
                                    recipe={recipe}
                                />
                            </div>
                            <div className="mb-4  p-3 border">
                                <h4 className="mb-3">Steps<sup className="text-danger">*</sup></h4>
                                <StepsField 
                                    control={control}
                                    ref={register} 
                                    errorText={"Step is a required field"}
                                    errors={errors}
                                />
                            </div>
                            <Form.Group className="mb-3">
                                <Button type="submit">{type === "create" ? "Create" : "Save"}</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormRecipe