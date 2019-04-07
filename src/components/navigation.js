import React from 'react';
import { Link } from 'react-router-dom';
import auth from './auth';

function Navigation() {
  let list = 
    <React.Fragment>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </React.Fragment>;

    if (auth.isAuthenticated) {
      list = 
        <React.Fragment>
          <li><Link to="/allStuff">All Stuff</Link></li>
          <li><Link to="/sellAThing">Sell A Thing</Link></li>
          <li><Link to="/logout">Log Out</Link></li> 
          {/* log out should take / redirect to homepage and navigation link should change to show login and signup */}
        </React.Fragment>
    }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {list}
      </ul>
    </nav>
  );
}

export default Navigation;