import {signInWithGooglePopup} from '../../utils/firebase/firebaae.utils'



const SignIn = ()=>{
    const loginGoogleUser = async()=>{
        const res = await signInWithGooglePopup()
    }


    return (
        <div>
            <h1>SignIn Page</h1>
            <button onClick={loginGoogleUser}>
                SignIn with Google
            </button>
        </div>
    )
}


export default SignIn