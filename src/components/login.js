// when logged in navigation link should change (no login and signup link)
// also when typing url to /login or /signup is not allowed (should redirect to other page)

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './navigation';
import { checkLogin } from '../actions/authActions';
import { saveAuth } from '../helper/localStorage';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false 
    };

    this.login = this.login.bind(this);
  }

  login() {
    // auth.authenticate(() => {
    //   this.setState({ redirectToReferrer: true });
    //   // console.log("loged in");
    // });

    saveAuth();
    this.props.checkLogin();
  }

  render() {
    // console.log("Login ", this.props.isAuthenticated);

    let { from } = this.props.location.state || { from: { pathname: "/"}};
    let { redirectToReferrer } = this.state;

    // console.log("Login from", from);
    // console.log("isi redirectToReferrer: ", redirectToReferrer);

    // if (redirectToReferrer) return <Redirect to="/allStuff" />
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <Navigation />
        <h2>Login</h2>
        {/* <button 
          onClick={
            () => {
              auth.isAuthenticated = true;
              this.props.history.push("/allStuff");
            }
          }
        > */}
        <button onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapActionsToProps = {
  checkLogin: checkLogin
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
