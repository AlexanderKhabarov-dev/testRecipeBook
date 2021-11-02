import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./store/reducers/rootReducer"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { reduxFirestore, getFirestore } from "redux-firestore"
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase"
import { createFirestoreInstance } from "redux-firestore"
import fbConfig from "./config/fbConfig"
import firebase from "firebase/compat/app"
import AuthIsLoaded from "./components/auth/AuthIsLoaded"

const store = createStore(
  rootReducer, 
  compose (
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
  )
)

const profileSpecificProps = {
  userProfile: 'users', 
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);
