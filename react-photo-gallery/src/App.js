import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './config';
// Components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

export default class App extends Component {
  
  constructor(){ 
    super();
    this.state = {
      photoData: []
    }
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beach&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        //console.log('Res', res);
        this.setState({
          photoData: res.data.photos.photo
        })
            
        //console.log('Photo Data: ', this.state.photoData)
      })
      .catch(err => {
        console.log(err);
      });
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        //console.log('Res', res);
        this.setState({
          photoData: res.data.photos.photo
        })
            
        //console.log('Photo Data: ', this.state.photoData)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        {/*// Turn Search form into a Componenent*/}
        {/* Check Data Fetching in React Search Form Component */}
        <SearchForm onSearch={this.performSearch} />

        <Nav />
        
        <PhotoContainer photoData={this.state.photoData}/>

      </div>
    );
  }
}

// var Flickr = require('flickr-sdk');

// var flickr = new Flickr('68e3ad5313a1717175378025e08aaceb');

// flickr.photos.search({
//   text: 'doggo',
//   per_page: 25
// }).then(function (res) {
//   console.log('yay!', res.body);
//   let photo = res.body.photos.photo[0]
//   let farmId = photo.farm;
//   let serverId = photo.server;
//   let id = photo.id;
//   let secret = photo.secret;
//   console.log(`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`)
// }).catch(function (err) {
//   console.error('bonk', err);
// });