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
          <React.Fragment>
            <Link to="/" className="active item">Home</Link>
            <div className="right menu">
              <Link to="/login" className="item">Login</Link>
              <Link to="/signup" className="item">Sign Up</Link>
            </div>
          </React.Fragment>
    } else {
      list = 
          <React.Fragment>
            <Link to="/allStuff" className="item">All Stuff</Link>
            <Link to="/sellAThing" className="item">Sell A Thing</Link>
            <div className="right menu">
              <Link to="/" onClick={this.handleLogout} className="item">Log Out</Link> 
            </div>
          </React.Fragment>
    }

    return (
      <div className="ui mini menu">
        {list}
      </div>
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