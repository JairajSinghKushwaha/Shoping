import {
    SignUpContainer,
    ButtonsContainer
} from './sign-in-form.style.jsx';
import { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utilities/firebase/firebase.utils';

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
         await signInWithGooglePopup();      
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           await signInAuthUserWithEmailAndPassword(email, password);
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
        <SignUpContainer>
            <h1>Already have an account?</h1>
            <h2>Sign in with your email and password</h2>
            <form onSubmit={handleSubmit}>

                <FormInput
                 label="Email" type="email"
                 required onChange={handleChange} 
                 value={email} name="email"
                />

                <FormInput
                 label="Password" type="password"
                 required onChange={handleChange} 
                 value={password} name="password"
                />

                <ButtonsContainer>
                    <Button type="submit">SIGN IN</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} type="button">
                    Google Sign In
                    </Button>
                </ButtonsContainer>      
                
            </form>
        </SignUpContainer>
    );
}
export default SignInForm;