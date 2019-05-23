import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

class AllStuff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const authStorage = loadAuth();
    const { shazam } = authStorage;
    const authString = 'Bearer ' + shazam;
    
    axios.get("http://localhost:3000/api/stuff", {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      if (res.status && res.status === 200) {
        // console.log(res.data);
        this.setState({ data: res.data });
      }
    })
    .catch( err => console.log(err) );
  }

  render() {
    // console.log("allstuff ", this.props.isAuthenticated)
    const datas = this.state.data;
    // console.log("isi datas: ", datas.length)
    // console.log(datas);

    return (
      <div>
        <Navigation />
        <div className="ui container">
          <h2>All Stuff</h2>
          <div className="ui small images">
            { 
              datas.length > 0 &&
              datas.map( data => {
                return (
                  <Link 
                    key={data._id} 
                    to={{
                      pathname: "/viewAThing",
                      state: { _id: data._id }
                    }} 
                  >
                    <img src={data.imageUrl} alt={data.title} />
                  </Link>
                )
              })
            }
          </div>
        </div>
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
