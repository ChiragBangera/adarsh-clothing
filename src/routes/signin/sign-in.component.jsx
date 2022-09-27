import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils' 
import { useNavigate } from 'react-router-dom'
import { createUserDocsFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from './signupform'


const SignIn = ()=>{
    const navigate = useNavigate()
    const loginGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = createUserDocsFromAuth(user)
        navigate('/')
        
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUser}>
                SignIn with Google
            </button>
            <SignUpForm/>
        </div>
    )
}


export default SignIn