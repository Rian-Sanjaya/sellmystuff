import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutSuccess } from '../actions/authActions';

class Navigation extends React.Component {
  handleLogout() {
    // console.log("Handle logout");
    localStorage.removeItem('@shazam');
    this.props.logoutSuccess();
  }

  render() {
    const { isAuthenticated } = this.props;

    let list; 

    if (!isAuthenticated) {
      list = 
        // <React.Fragment>
        //   <li><Link to="/">Home</Link></li>
        //   <li><Link to="/login">Login</Link></li>
        //   <li><Link to="/signup">Sign Up</Link></li>
        // </React.Fragment>;
        // <div className="ui container">
          <div className="ui secondary pointing menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/login" className="item">Login</Link>
            <Link to="/signup" className="item">Sign Up</Link>
          </div>
        // </div>
    } else {
      list = 
        // <React.Fragment>
        //   <li><Link to="/allStuff">All Stuff</Link></li>
        //   <li><Link to="/sellAThing">Sell A Thing</Link></li>
        //   <li><Link to="/" onClick={this.handleLogout}>Log Out</Link></li> 
        //   {/* log out should take / redirect to homepage and navigation link should change to show login and signup */}
        // </React.Fragment>
        // <div className="ui container">
          <div className="ui secondary pointing menu">
            <Link to="/allStuff" className="item">All Stuff</Link>
            <Link to="/sellAThing" className="item">Sell A Thing</Link>
            <div className="right menu">
              <Link to="/" onClick={this.handleLogout} className="ui item">Log Out</Link> 
            </div>
          </div>
        // </div>
    }

    return (
      <nav>
        <ul>
          {list}
        </ul>
        {/* <hr /> */}
      </nav>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapActionsToProps = {
  logoutSuccess: logoutSuccess
}

export default connect(mapStateToProps, mapActionsToProps)(Navigation);