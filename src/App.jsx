import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render(){
    return(
      <div className="app">
        <div className="app-title">Music Master</div>
        <div>
          <input placeholder="search an artist..." />
          <button>search</button>
        </div>
        <div className="profile">
          <div>artist picture</div>
          <div>artist name</div>
        </div>
        <div className="gallery">
        gallery
        </div>
      </div>
    )
  }
}

export default App;
