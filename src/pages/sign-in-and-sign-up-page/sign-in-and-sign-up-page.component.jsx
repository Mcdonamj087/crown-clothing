import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInSignUpPage = () => (
  
  <div className="sign-in-and-sign-up-page">
    <div className="outer">
      <div className='half'>
        <h1>Sign In Component</h1>
        <SignIn />
      </div>

      <div className='half'>
        <h1>Sign Up Component</h1>
      </div>
    </div>
  </div>

)

export default SignInSignUpPage;