import React from 'react';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

class ViewAThing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loginId: ''
    };
  }

  componentDidMount() {
    // console.log("isi props: ", this.props)
    const authStorage = loadAuth();
    const { shazam, userId } = authStorage;
    const authString = 'Bearer ' + shazam;
    const { _id } = this.props.location.state;
    
    // axios.get(`http://localhost:3000/api/stuff/${_id}`, {
    axios.get(`https://tranquil-ridge-40313.herokuapp.com/api/stuff/${_id}`, {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      // console.log("isi res: ", res);
      if (res.status && res.status === 200) {
        this.setState({ data: res.data, loginId: userId });
      }
    })
    .catch( err => console.log(err) );
  }

  handleDelete(e) {
    e.preventDefault();

    const authStorage = loadAuth();
    const { shazam } = authStorage;
    const authString = 'Bearer ' + shazam;

    // axios.delete(`http://localhost:3000/api/stuff/${this.state.data._id}`, {
    axios.delete(`https://tranquil-ridge-40313.herokuapp.com/api/stuff/${this.state.data._id}`, {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      // console.log("isi res: ", res);
      return this.props.history.push("/allStuff");
    })
    .catch( err => console.log(err) );
  }

  render() {
    // console.log(this.state.data);
    // console.log('isi loginId: ',this.state.loginId)
    const { _id, title, description, imageUrl, price, userId } = this.state.data;
    const { loginId } = this.state

    return (
      <div>
        <Navigation />
        <div className="ui container">
          <img src={imageUrl} alt={title} style={{ maxWidth: '100%', marginTop: 20 }} />
          <h1>{title}</h1>
          <h2 style={{ color: '#7DB5F9'}}>{`Rp. ${price}`}</h2>
          <p style={{ fontSize: 20 }}>{description}</p>
          {
            loginId === userId && 
            <div>
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
          }
        </div>
      </div>
    );
  }
}

export default ViewAThing;