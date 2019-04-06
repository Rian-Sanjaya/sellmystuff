import React from 'react';
import auth from './auth';

const AllStuff = () => {
  console.log("All stuff ", auth.isAuthenticated);
  return <h2>All Stuff</h2>;
}

export default AllStuff;