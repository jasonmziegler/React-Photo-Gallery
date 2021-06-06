import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './config';
// Components
import SearchForm from './Components/SearchForm';

export default class App extends Component {
  
  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=muscle&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        console.log('Res', res);
            
      })
      .then(resData => {
        console.log(resData);
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
        <SearchForm />

        <nav className="main-nav">

          {/* Use React Router for these?*/}
          <ul>
            <li><a href='#'>Cats</a></li>
            <li><a href='#'>Dogs</a></li>
            <li><a href='#'>Computers</a></li>
          </ul>
        </nav>


        {/* Use Fetch to connect to Flickr API, and .then parse with .json(), .then this.setState,  .catch errors */}
        {/*Turn photoContainer into a component, and create a photo component, pass data prop to PhotoContainer*/}
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            <li>
              <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>
            {/*<!-- Not Found -->*/}

            {/* Great NotFound Component and display if empty results */}
            <li className="not-found">
              <h3>No Results Found</h3>
              <p>You search did not return any results. Please try again.</p>
            </li>
          </ul>
        </div>

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