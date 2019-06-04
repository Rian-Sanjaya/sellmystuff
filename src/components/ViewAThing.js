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

  handleDelete(e) {
    e.preventDefault();

    const authStorage = loadAuth();
    const { shazam } = authStorage;
    const authString = 'Bearer ' + shazam;

    axios.delete(`http://localhost:3000/api/stuff/${this.state.data._id}`, {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      console.log("isi res: ", res);
      return this.props.history.push("/allStuff");
    })
    .catch( err => console.log(err) );
  }

  render() {
    // console.log(this.state.data);
    const { _id, title, description, imageUrl, price } = this.state.data;

    return (
      <div>
        <Navigation />
        <div className="ui container">
          <img src={imageUrl} alt={title} style={{ maxWidth: '100%', marginTop: 20 }} />
          <h1>{title}</h1>
          <h2 style={{ color: '#7DB5F9'}}>{`Rp. ${price}`}</h2>
          <p style={{ fontSize: 20 }}>{description}</p>
          <button
            className="ui primary button"
            onClick={ () => {
              return this.props.history.push({pathname: "/modifyAThing", state: {_id: _id}})
            }}
          >
            Modify
          </button>
          <button
            className="ui red button"
            onClick={ (e) => {
              this.handleDelete(e)
            }} 
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ViewAThing;