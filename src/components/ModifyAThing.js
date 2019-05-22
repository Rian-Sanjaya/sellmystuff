import React from 'react';
import axios from 'axios';
import Navigation from './navigation';
import { loadAuth } from '../helper/localStorage';

class ModifyAThing extends React.Component {

  render() {
    // console.log("isi props location: ", this.props.location);
    return (
      <div>
        <Navigation />
        <h2>Modify A Thing</h2>
        
      </div>
    );
  }
}

export default ModifyAThing;