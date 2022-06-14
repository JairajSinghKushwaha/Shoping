import './sign-up-form.style.scss';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utils';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword:''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
          alert('password do not match'); return;
        }
        try {
           const {user} = await createAuthUserWithEmailAndPassword(email, password); 
           await createUserDocumentFromAuth(user,{displayName});
           resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
              alert("Can't create user, email already in use.");
            }
            console.log("user creation encountered an error", error);
        }
    }

    return(
        <div className='sign-up-container'>
            <h1>Don't have an account?</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                 label="Display Name"
                 type="text"
                 required
                 onChange={handleChange} 
                 value={displayName} 
                 name="displayName"
                />
                <FormInput
                 label="Email"
                 type="email"
                 required
                 onChange={handleChange} 
                 value={email} 
                 name="email"
                />
                <FormInput
                 label="Password"
                 type="password"
                 required
                 onChange={handleChange} 
                 value={password} 
                 name="password"
                />
                <FormInput
                 label="Confirm Password"
                 type="password"
                 required
                 onChange={handleChange} 
                 value={confirmPassword} 
                 name="confirmPassword"
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}
export default SignUpForm;