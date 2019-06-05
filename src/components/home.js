import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/stuff")
    .then( res => {
      if (res.status && res.status === 200) {
        // console.log('isi res.data: ', res.data);
        this.setState({ data: res.data });
      }
    })
    .catch( err => console.log('isi error: ', err) );
  }

  render() {
    const datas = this.state.data;
    // console.log("isi datas: ", datas.length)
    // console.log(datas);

    return (
      <div>
        <Navigation />
        <div className="hero-image" style={{ marginBottom: '20px' }}>
          <h2 className="hero-text">
            THE ABSOLUTE BEST PLACE TO SELL YOUR STUFF
          </h2>
        </div>
        <div className="ui container">
          <div className="ui centered cards">
            { 
              datas.length > 0 &&
              datas.map( data => {
                return (
                  <Link 
                    key={data._id} 
                    to={{
                      pathname: "/view",
                      state: { _id: data._id }
                    }} 
                  >
                    <div className="card" style={{ margin: '5px' }}>
                      <div className="image">
                        <img src={data.imageUrl} alt={data.title} style={{ height: '270px', width: '270px' }} />
                      </div>
                      <div className="content">
                        <div className="header" style={{ fontSize: 22, color: '#1E1E1E' }}>{data.title}</div>
                        <div className="meta" style={{ fontSize: 16 }}>{`Rp. ${data.price}`}</div>
                      </div>
                    </div>
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

export default Home;
