import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBkvQttdDCXIkOkawlmP-AEsOAMOD2jA2Q",
  authDomain: "auth-dev-76ff0.firebaseapp.com",
  projectId: "auth-dev-76ff0",
  storageBucket: "auth-dev-76ff0.appspot.com",
  messagingSenderId: "773494485103",
  appId: "1:773494485103:web:477a404f98d03193f3dd9a"
})

export const auth = app.auth()
export default app
