import React from 'react';
import auth from './auth';

const Home = () => {
  console.log("Home ", auth.isAuthenticated);
  return <h2>Home</h2>;
}

export default Home;