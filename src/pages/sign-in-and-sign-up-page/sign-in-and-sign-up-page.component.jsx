import React from 'react';
import './sign-in-and-sign-up-page.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = () => (
  
  <div className="sign-in-and-sign-up">
    <div className="outer">
      <div className='half'>
        <SignIn />
      </div>

      <div className='half'>
        <SignUp />
      </div>
    </div>
  </div>

)

export default SignInSignUpPage;