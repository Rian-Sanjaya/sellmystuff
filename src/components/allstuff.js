import React from 'react';
import auth from './auth';
import Navigation from './navigation';

const AllStuff = () => {
  console.log("All stuff ", auth.isAuthenticated);
  return (
    <div>
      <Navigation />
      <h2>All Stuff</h2>;
    </div>
  );
}

export default AllStuff;