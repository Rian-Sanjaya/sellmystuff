import React from 'react';
import auth from './auth';

const Signup = () => {
  console.log("Sign Up", auth.isAuthenticated);
  return <h2>Sign Up</h2>
}

export default Signup;