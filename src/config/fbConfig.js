
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/database'
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/storage'



const firebaseConfig = {
  apiKey: "AIzaSyARrV48IKkgMUet7NoJEbez3rFiRHm2IO0",
  authDomain: "recipe-book-ee19a.firebaseapp.com",
  projectId: "recipe-book-ee19a",
  storageBucket: "recipe-book-ee19a.appspot.com",
  messagingSenderId: "356048506402",
  appId: "1:356048506402:web:69d7a7e69ab3c992fc047b"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true, merge: true})

export default firebase