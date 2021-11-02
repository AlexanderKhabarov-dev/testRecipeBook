import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { successNotification, errorNotification } from "./notificationActions"

export const createRecipeAction = data => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        const storage = getStorage()
        const storageRef = ref(storage, data.recipe.image[0].name)

        uploadBytes(storageRef, data.recipe.image[0])
        .then((snapshot) => getDownloadURL(snapshot.ref).then(url => {
            firestore.collection("recipes").add({
                title: data.recipe.title,
                description: data.recipe.description,
                ingredients: data.ingredients,
                steps: data.steps,
                difficult: data.recipe.difficult,
                likes: [],
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId,
                imageUrl: url,
                createdAt: new Date(),
            })
            .catch(error =>  dispatch(errorNotification("error", error.message)))
        }))
        .then(() => dispatch(successNotification("Create", "The recipe has been created")))
        .catch(error =>  dispatch(errorNotification("error", error.message)))
    }
}

export const editRecipeAction = (data, id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()

        const recipe = {
            title: data.recipe.title,
            description: data.recipe.description,
            difficult: data.recipe.difficult,
            ingredients: data.ingredients,
            steps: data.steps,
            editedAt: new Date(),
        }

        if(data.recipe.image[0]) {
            const storage = getStorage()
            const storageRef = ref(storage, data.recipe.image[0].name)
            
            uploadBytes(storageRef, data.recipe.image[0])
            .then((snapshot) => getDownloadURL(snapshot.ref).then(url => {
                firestore.collection("recipes").doc(id).update({ ...recipe, imageUrl: url })
                .catch(error => dispatch(errorNotification("error", error.message)))
            }))
            .then(() => dispatch(successNotification("Edit", "The recipe has been edited")))
            .catch(error => dispatch(errorNotification("error", error.message)))
        } else {
            firestore.collection("recipes").doc(id).update({ ...recipe })
            .then(() => dispatch(successNotification("Edit", "The recipe has been edited")))
            .catch(error =>  dispatch(errorNotification("error", error.message)))
        }
    }   
}

export const createSyncRecipe = recipe => {
    return {
        type: "CREATE_RECIPE",
        recipe,
    }
}

export const createSyncRecipeError = error => {
    return {
        type: "CREATE_RECIPE_ERROR",
        error
    }
}