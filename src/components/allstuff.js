import React from 'react';
// import { connect } from 'react-redux';
import Navigation from './navigation';

class AllStuff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("allstuff ", this.props.isAuthenticated)
    return (
      <div>
        <Navigation />
        <h2>All Stuff</h2>
      </div>
    );
  }
}

// const mapStatetoProps = (state, props) => {
//   return {
//     loading: state.auth.loading,
//     isAuthenticated: state.auth.isAuthenticated
//   };
// };

// export default connect(mapStatetoProps)(AllStuff);
export default AllStuff;
