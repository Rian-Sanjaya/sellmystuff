import React from 'react';
import Navigation from './navigation';

const RESET_VALUES = { title: '' };

class SellAThing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Object.assign({}, RESET_VALUES)
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState( prevState => {
      return { data: { ...prevState.data, [name]: value } };
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <h2>Sell A Thing</h2>
        <form>
            <label className="sell-label">Title</label><br />
            <input 
              type="text" 
              name="title" 
              placeholder="What are you selling ?" 
              value={this.state.data.title} 
              onChange={ (e) => this.handleChange(e) } 
              required 
            />
        </form>
      </div>
    )
  }
}

export default SellAThing;