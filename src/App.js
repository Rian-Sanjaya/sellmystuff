import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import auth from './components/auth';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import AllStuff from './components/allstuff';
import SellAThing from './components/sellathing';

// function component
// with destucturing argument (component argument, and ...take in the rest of argument(s)
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest} 
      render={props => 
        auth.isAuthenticated 
        ? (
            <Component {...props} />
          ) 
        : (
            <Redirect to="/login" />
            // <Redirect 
            //   to={{
            //     pathname: "/login",
            //     state: { from: props.location }
            //   }}
            // />
          )
      }
    />
  );
}

class App extends Component {
  render() {
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
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {list}
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/allStuff" component={AllStuff} />
          <PrivateRoute path="/sellAThing" component={SellAThing} />
        </div>
      </Router>
    );
  }
}

// const NavLink = withRouter(
//   ({ history }) =>  {
//     let list = 
//       <React.Fragment>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Sign Up</Link></li>
//       </React.Fragment>;

//       if (auth.isAuthenticated) {
//         list = 
//           <React.Fragment>
//             <li><Link to="/allStuff">All Stuff</Link></li>
//             <li><Link to="/sellAThing">Sell A Thing</Link></li>
//             <li>
//               <Link 
//                 to="/logout" 
//                 onClick={() => {
//                   auth.isAuthenticated = false;
//                   history.push("/");
//                   // return <Redirect to="/" />
//                 }}
//               >
//                 Log Out
//               </Link>
//             </li>
//           </React.Fragment>
//       }

//     return (
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           {list}
//         </ul>
//         <hr />
//       </nav>

//       // auth.isAuthenticated === true 
//       // ? <p>
//       //     Welcome!{" "}
//       //     <button 
//       //       onClick={() => {
//       //         auth.signout(() => history.push("/"));
//       //       }}
//       //     >
//       //       Sign Out
//       //     </button>
//       //   </p>
//       // : <p>
//       //     You are not logged in.
//       //   </p>

//     );
//   }
// );

export default App;
