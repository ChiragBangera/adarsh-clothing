import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})



export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocsFromAuth = async (userAuth,additionalInfo={}) =>{
    // check Existing existing docs
    if(!userAuth)return;
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnap = await getDoc(userDocRef)
    if(!userSnap.exists()){
        const {displayName, email} = userAuth
        const createdDate = new Date()

        try {
            await setDoc(userDocRef,{displayName,email,createdDate,...additionalInfo})
        }
        catch(err){
            console.log(err.message)
        }
    }

    return userDocRef 
}


export const createManualUser = async(email,password)=>{
    if(!email||!password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}