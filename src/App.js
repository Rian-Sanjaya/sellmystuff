import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import './App.css';
import { loadAuth } from './helper/localStorage';
import { loadAuthSuccess } from './actions/authActions';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import AllStuff from './components/allstuff';
import SellAThing from './components/sellathing';
import ViewAThing from './components/ViewAThing';
import ModifyAThing from './components/ModifyAThing';

// function component
// with destucturing argument (component argument, and ...take in the rest of argument(s)
function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  // console.log("(private route) isi isAuthenticated: ", isAuthenticated);
  // console.log("Private ...rest: ", {...rest});
  return (
    <Route
      {...rest} 
      render={props => 
        isAuthenticated 
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

function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  // console.log(" (public route) isi isAuthenticated: ", isAuthenticated);
  // console.log("Public ...rest: ", {...rest});
  return (
    <Route 
      {...rest} 
      render={props => 
        !isAuthenticated 
        ? (
            <Component {...props} />
          )
        : (
            <Redirect to="/allStuff" />
          )
      }
    />
  );
}

// const PublicRoute = ({ component: Component, authed, ...rest}) => {
// 	return (
// 		<Route {...rest}
// 			render={(props) => !authed
// 				? <Component {...props} />
// 				: <Redirect to='/' />
// 			}
// 		/>
// 	)
// }

class App extends Component {
  componentWillMount() {
    // console.log("component will mount");
  }

  componentDidMount() {
    // console.log("component did mount");
    const authStorage = loadAuth();
    // console.log("isi authStorage: ", authStorage);
    if (authStorage) {
      this.props.loadAuthSuccess();
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    // console.log("isi isAuthenticated: ", isAuthenticated)
    return (
      <div className="ui container">
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} />
            <PublicRoute exact path="/login" component={Login} isAuthenticated={isAuthenticated} />
            <PublicRoute path="/signup" component={Signup} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/allStuff" component={AllStuff} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/sellAThing" component={SellAThing} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/viewAThing" component={ViewAThing} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/modifyAThing" component={ModifyAThing} isAuthenticated={isAuthenticated} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
      loading: state.auth.loading,
      isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapActionsToProps = {
  loadAuthSuccess: loadAuthSuccess,
}

export default connect(mapStateToProps, mapActionsToProps)(App);
