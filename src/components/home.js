import React from 'react';
import auth from './auth';
import Navigation from './navigation';

const Home = () => {
  console.log("Home ", auth.isAuthenticated);
  return (
    <div>
      <Navigation />
      <h2>Home</h2>
    </div>
  );
}

export default Home;