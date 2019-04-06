import React from 'react';
import auth from './auth';

const SellAThing = () => {
  console.log("Sell A Thing", auth.isAuthenticated);
  return <h2>Sell A Thing</h2>;
}

export default SellAThing;