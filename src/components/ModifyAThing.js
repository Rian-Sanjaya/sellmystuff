import React from 'react';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

const RESET_VALUES = { title: '', description: '', imageUrl: '', price: 0, userId: '' };

class ModifyAThing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Object.assign({}, RESET_VALUES),
      file: '',
      imagePreviewUrl: ''
    };
  }

  componentDidMount() {
    // console.log("isi props: ", this.props)
    const authStorage = loadAuth();
    const { shazam } = authStorage;
    const authString = 'Bearer ' + shazam;
    const { _id } = this.props.location.state;
    
    axios.get(`http://localhost:3010/api/stuff/${_id}`, {
    // axios.get(`https://tranquil-ridge-40313.herokuapp.com/api/stuff/${_id}`, {
      headers: {
        Authorization: authString
      }
    })
    .then( res => {
      // console.log("isi res: ", res);
      if (res.status && res.status === 200) {
        this.setState({ data: res.data, imagePreviewUrl: res.data.imageUrl });
      }
    })
    .catch( err => console.log(err) );
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (e.target.validity.valid) {
      this.setState( prevState => {
        return { 
          data: { 
            ...prevState.data, 
            [name]: value 
          } 
        };
      });
    }
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleSubmit(e) {
    e.preventDefault();

    const authStorage = loadAuth();
    const { shazam, userId } = authStorage;
    const authString = 'Bearer ' + shazam;
  
    const thing = {
      title: this.state.data.title,
      description: this.state.data.description,
      imageUrl: '',
      price: this.state.data.price,
      userId: userId
    };

    const formData = new FormData();
    formData.append('thing', JSON.stringify(thing));
    formData.append('image', this.state.file);

    // Display the key/value pairs
    // for (var pair of formData.entries()) {
    //   // console.log(pair[0]+ ', ' + pair[1]); 
    //   console.log(pair[1])
    // }

    axios.put(`http://localhost:3010/api/stuff/${this.state.data._id}`, formData, {
    // axios.put(`https://tranquil-ridge-40313.herokuapp.com/api/stuff/${this.state.data._id}`, formData, {
      headers: {
        Authorization: authString,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then( res => {
      // console.log("isi res: ", res);
      return this.props.history.push('/allStuff');
    })
    .catch( err => console.log(err) );
  }

  render() {
    // console.log("isi props location: ", this.props.location);
    const { data, imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt='' style={{ maxWidth: '100%' }} />);
    }
    return (
      <div>
        <Navigation />
        <div className="ui container" style={{ marginTop: 20 }}>
          <form className='ui form'>
            <div className='field'>
              <label>Title</label><br />
              <input 
                type="text" 
                name="title" 
                placeholder="What are you selling ?" 
                value={data.title} 
                onChange={ (e) => this.handleChange(e) } 
                autoComplete='off'
                required 
              />
            </div>
            <label htmlFor='add-image' className='ui green button'>Add Image</label>
            <input type="file" accept='image/*' id='add-image' name="image" style={{ display: 'none' }} onChange={(e) => this._handleImageChange(e)} />
            <br />
            {$imagePreview}
            <div className='field'>
              <label>Price</label><br />
              <input type="number" name='price' value={data.price} onChange={(e) => this.handleChange(e)} step="any" />
            </div>
            <div className='field'>
              <label>Description</label><br />
              <textarea 
                name="description" 
                value={data.description} 
                onChange={ (e) => this.handleChange(e) } 
                required 
              />
            </div>
            <button className='ui primary button' onClick={(e) => this.handleSubmit(e)}>Update</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ModifyAThing;