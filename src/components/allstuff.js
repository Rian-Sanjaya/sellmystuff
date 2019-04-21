import React from 'react';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

class AllStuff extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const authStorage = loadAuth();
    const { token } = authStorage;
    const authString = 'Bearer ' + token;
    
    axios.get("http://localhost:3000/api/stuff", {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      if (res.status && res.status === 200) {
        console.log(res.data);
      }
    })
    .catch( err => console.log(err) );
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
