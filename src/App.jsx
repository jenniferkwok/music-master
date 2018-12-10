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
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + "q=" +this.state.query+ "&type=artist&limit=1";
//  const FETCH_URL = ${BASE_URL}q=${this.state.query}&type=artist&limit=1;
  console.log(FETCH_URL);
// eslint-disable-next-line
  fetch(FETCH_URL, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer BQBmttbw-OPmfbvmXR-j0Dr-i6hgVwJQftGyOtuqZsyFprPfynGVH14kpo_pD9_yi3cVf_ZG2VbRvnvsOOZiImdVNePal_Wj3gebtBdtjXVsAinzJTUcDjPn29m2TwCUX2bATRsPxhs9in5krS3BnngZVSxYMfyHpaMYPqhx'
    }
  })
  .then(response => response.json())
  .then(json => console.log('json', json));
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
            <InputGroup.Addon onClick={()=>this.search()}>
            <Glyphicon glyph="search"></Glyphicon>

          </InputGroup.Addon>
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
