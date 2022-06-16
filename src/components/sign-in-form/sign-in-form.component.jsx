import './sign-in-form.style.scss';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utilities/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: ''
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
         const {user} = await signInWithGooglePopup();
         console.log(user);
         const data = await createUserDocumentFromAuth(user);
         console.log(data);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await signInAuthUserWithEmailAndPassword(email, password);
          console.log(response);
           resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Invalid password for email.');
                    break;
                case 'auth/user-not-found':
                    alert('Invalid email.')
                    break;
                default:
                    console.log(error)
                    break;
            }
        }
    }

    return(
        <div className='sign-up-container'>
            <h1>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                <Button type="submit">SIGN UP</Button>
                <Button buttonType='google' onClick={signInWithGoogle} type="button">
                  Google Sign In
                </Button>
                </div>      
            </form>
        </div>
    );
}
export default SignInForm;