import { useState } from "react";
import { createManualUser } from "../../utils/firebase/firebase.utils";
import { createUserDocsFromAuth } from "../../utils/firebase/firebase.utils";
const formFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}



const SignUpForm = () => {
    const [userFields, setUserFields] = useState(formFields)
    const {displayName,password,confirmPassword,email} = userFields


    const handleChange = (event)=>{
        const {name,value} = event.target
        setUserFields({...userFields,[name]:value})
    }

    const handleSubmit = async(event)=>{
        event.preventDefault()
        if(password!=confirmPassword) {
            alert('passwords do not match')
            return;
        }
        try{
            const {user} = await createManualUser(email,password)

            await createUserDocsFromAuth(user,{displayName})
            setUserFields(formFields)
        }
        catch(err){console.log(err.mesaage)}

    }




    return ( 
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input onChange={handleChange} value={displayName} required name="displayName" type="text"/>
                <label>Email</label>
                <input onChange={handleChange} value={email} required name="email" type="email"/>
                <label>Password</label>
                <input onChange={handleChange} value={password} required name="password" type="password"/>
                <label>Confirm Password</label>
                <input onChange={handleChange} value={confirmPassword} required name="confirmPassword" type="password"/>
                <button type="submit">SignUp</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;