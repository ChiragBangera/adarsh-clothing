import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB33FSBrKismLtIhhkecosRTZgm1W_UzsY",
    authDomain: "adarsh-clothing-db.firebaseapp.com",
    projectId: "adarsh-clothing-db",
    storageBucket: "adarsh-clothing-db.appspot.com",
    messagingSenderId: "886966118172",
    appId: "1:886966118172:web:d16a8de9268a72b792fcd9"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:'select_account'
})



export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)