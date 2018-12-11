import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      query:'',
      artist: null
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
      'Authorization': 'Bearer BQBzH4VxODCRc5i7qWMBZMtkCh30EPiJ_-xzPzdd-I6bkxj0t4rEz_JP-ba2ny1jYB8itx1orerQyvJOa_jgAY3qafHDAR3dfJvaGKuUVZt2Y4C4bJiweN9_ZcTx_b5Z1J5GLDQGRgQ29LANfTX6Xs1yOl10tYJ8dhoBxu_5'
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log('json', json)
    const artist = json.artists.items[0];
    console.log('artist', artist);
  }
  );
}

  render(){
    return(
      <div className="app">
        <div className="app-title">Music Master</div>
        <FormGroup>
        <InputGroup>
          <FormControl
          type="text"
          placeholder="search an artist..."
          value={this.state.query}
          onChange={event=>{this.setState({query:event.target.value})}}
          onKeyPress={
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

        <Profile artist={this.state.artist}/>
        <div className="gallery">
        gallery
        </div>
      </div>
    )
  }
}

export default App;
