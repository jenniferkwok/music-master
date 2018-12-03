import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      query:''
    }
  }

search(){
  console.log('this.state', this.state);
}

  render(){
    return(
      <div className="app">
        <div className="app-title">Music Master</div>
        <FormGroup>
        <InputGroup>
          <FormControl
          placeholder="search an artist..."
          value={this.state.query}
          onChange={event=>{this.setState({query:event.target.value})}}
          onKeyPress={
            // event=>console.log('event.key', event.key)
            event=>{
              if(event.key==='Enter'){
                this.search()
              }
            }
          }
            />
          <button onClick={()=>this.search()}>search</button>
          </InputGroup>
        </FormGroup>
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
