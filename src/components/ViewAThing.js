import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

class ViewAThing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // console.log("isi props: ", this.props)
    const authStorage = loadAuth();
    const { shazam } = authStorage;
    const authString = 'Bearer ' + shazam;
    const { _id } = this.props.location.state;
    
    axios.get(`http://localhost:3000/api/stuff/${_id}`, {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      // console.log("isi res: ", res);
      if (res.status && res.status === 200) {
        this.setState({ data: res.data });
      }
    })
    .catch( err => console.log(err) );
  }

  render() {
    // console.log(this.state.data);
    const { _id, title, description, imageUrl, price } = this.state.data;

    return (
      <div>
        <Navigation />
        <h2>View A Thing</h2>
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <button
          onClick={ () => {
            console.log("modify clicked")
            return this.props.history.push({pathname: "/modifyAThing", state: {_id: _id}})
          }}
        >
          Modify
        </button>
        <button>Delete</button>
      </div>
    );
  }
}

export default ViewAThing;