import React, { Component } from 'react';
import './App.css';

import Navigation from '../../components/Navbar';
import Search from '../Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <Navigation />
          <div style={{ marginTop: '150px'}}>
            <h2>Start Your Journey</h2>
            <h3>Compare hundreds of travel websites at once</h3>
          </div>
          <Search />         
          
        </div>
        <div>
          <p>600 * 14 here</p>
        </div>
        <div>
          <p>Top Destinations</p>
        </div>
        <div>
          <p>Download Our Ap</p>
        </div>
        <div>
          <p>Footer</p>
        </div>
        
      </div>
    );
  }
}

export default App;
