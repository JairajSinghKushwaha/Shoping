import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utilities/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async() => {
        // destructuring
        const {user} = await signInWithGooglePopup();
        const userDataRef = await createUserDocumentFromAuth(user);
    }

 return (
    <div>
         <h1>Sign In Page</h1>
         <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
 );
}
export default SignIn;