import { successNotification, errorNotification } from "./notificationActions"

export const signUpAction = (user) => {
    return (dispatch,  getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => firestore.collection("users").doc(res.user.uid).set({
            firstName: user.firstName,
            lastName: user.lastName,
        }))
        .then(() => dispatch(successNotification("Sign up", "Success")))
        .catch(error => dispatch(errorNotification("Error", error.message)))
    }
}

export const logOutAction = () => {
    return (dispatch,  getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then(() => dispatch(successNotification("Log out", "Success")))
        .catch(error => dispatch(errorNotification("Error", error.message)))
    }
}

export const signInAction = credentails => {
    return  (dispatch,  getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentails.email,
            credentails.password,
        )
        .then(() => dispatch(successNotification("Log in", "Success")))
        .catch(error => dispatch(errorNotification("Error", error.message)))
    }
}