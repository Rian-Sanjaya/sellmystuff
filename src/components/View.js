import React from 'react';
import axios from 'axios';
import Navigation from './navigation';

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const { _id } = this.props.location.state;
    
    axios.get(`http://localhost:3010/api/stuff/view/${_id}`)
    // axios.get(`https://tranquil-ridge-40313.herokuapp.com/api/stuff/view/${_id}`)
    .then( res => {
      // console.log("isi res: ", res);
      if (res.status && res.status === 200) {
        this.setState({ data: res.data});
      }
    })
    .catch( err => console.log(err) );
  }

  render() {
    // console.log(this.state.data);
    // console.log('isi loginId: ',this.state.loginId)
    const { title, description, imageUrl, price } = this.state.data;

    return (
      <div>
        <Navigation />
        <div className="ui container">
          <img src={imageUrl} alt={title} style={{ maxWidth: '100%', marginTop: 20 }} />
          <h1>{title}</h1>
          <h2 style={{ color: '#7DB5F9'}}>{`Rp. ${price}`}</h2>
          <p style={{ fontSize: 20 }}>{description}</p>
        </div>
      </div>
    );
  }
}

export default View;