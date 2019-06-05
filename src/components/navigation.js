import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutSuccess } from '../actions/authActions';
import '../style/style.css';

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
          <div className="right menu">
            <Link style={{ color: '#FFF' }} to="/login" className="item">Login</Link>
            <Link style={{ color: '#FFF' }} to="/signup" className="item">Sign Up</Link>
          </div>
        </React.Fragment>
    } else {
      list = 
        <React.Fragment>
          <Link style={{ color: '#FFF' }} to="/allStuff" className="item">My Stuff</Link>
          <Link style={{ color: '#FFF' }} to="/sellAThing" className="item">Sell A Thing</Link>
          <div className="right menu">
            <Link style={{ color: '#FFF' }} to="/" onClick={this.handleLogout} className="item">Log Out</Link> 
          </div>
        </React.Fragment>
    }

    return (
      <div>
        <div className="ui mini menu" style={{ margin: 0, fontSize: 24, backgroundColor: '#333333' }}>
          <Link style={{ fontSize: 28, color: '#FFF' }} className='item' to="/">All Stuff</Link>
          {list}
        </div>
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