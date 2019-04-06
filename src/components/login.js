import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from './auth';

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login() {
    auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
      // console.log("loged in");
    });
  }

  render() {
    console.log("Login ", auth.isAuthenticated);

    let { from } = this.props.location.state || { from: { pathname: "/"}};
    let { redirectToReferrer } = this.state;

    console.log("Login from", from);

    // if (redirectToReferrer) return <Redirect to="/allStuff" />
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <h2>Login</h2>
        <button 
          onClick={
            () => {
              auth.isAuthenticated = true;
              this.props.history.push("/allStuff");
            }
          }
        >
        {/* <button onClick={this.login}> */}
          Login
        </button>
      </div>
    );
  }
}

export default Login;