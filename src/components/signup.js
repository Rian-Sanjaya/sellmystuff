// when logged in navigation link should change (no login and signup link)
// also when typing url to /login or /signup is not allowed (should redirect to other page)

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Navigation from './navigation';

const RESET_VALUES = { email: '', password: '' };

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false ,
      formData: Object.assign({}, RESET_VALUES),
      error: ''
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(( prevState ) => {
      return { formData: { ...prevState.formData, [name]: value } };
    });
  }

  handleSignup(e) {
    // auth.authenticate(() => {
    //   this.setState({ redirectToReferrer: true });
    //   // console.log("loged in");
    // });

    e.preventDefault();

    // console.log(this.state.formData)
    const { email, password } = this.state.formData;
    const data = {
      email: email,
      password: password
    }
    // console.log("isi data: ", data);

    axios.post("http://localhost:3010/api/auth/signup", data)
    // axios.post("https://tranquil-ridge-40313.herokuapp.com/api/auth/signup", data)
    .then( res => {
      if (res.status && res.status === 201) {
        // console.log(res);
        this.props.history.push('/login')
      }
    })
    .catch( err => console.log(err) );
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/"}};
    let { redirectToReferrer } = this.state;

    // console.log("Login from", from);
    // console.log("isi redirectToReferrer: ", redirectToReferrer);

    // if (redirectToReferrer) return <Redirect to="/allStuff" />
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <Navigation />
        <div className="" style={{ margin: '0 auto', marginTop: 20, maxWidth: '1000px' }}>
          <h2>Sign Up</h2>
          <form className="ui form">
            <div className="field">
              <label style={{ fontSize: 16 }}>Email address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                value={this.state.formData.email} 
                onChange={this.handleChange} 
                autoComplete="off"
                required 
              />
            </div>
            <div className="field">
              <label style={{ fontSize: 16 }}>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="Enter your password"
                value={this.state.formData.password}
                onChange={this.handleChange} 
                required 
              />
            </div>
            <br />
            <button 
              className="ui teal button" 
              type="submit" 
              onClick={this.handleSignup} 
            >
              Sign up
            </button>
          </form>
        </div>
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

export default connect(mapStateToProps)(Signup);
