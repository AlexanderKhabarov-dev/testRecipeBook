import { combineReducers } from "redux";
import notificationsReducer from "./notificationReducer";
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    notifications: notificationsReducer,
    firestore: firestoreReducer,
    firebase:  firebaseReducer,
})

export default rootReducer