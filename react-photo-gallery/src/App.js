import React, {Component} from 'react';
import {BrowserRouter,
        Route,
        Switch
      } from 'react-router-dom'; 
import './App.css';
import axios from 'axios';
import apiKey from './config';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

export default class App extends Component {
  
  constructor(){ 
    super();
    this.state = {
      photoData: [],
      catsData:[],
      dogsData:[],
      computersData:[]
    }
  }

  // Function will load images for static routes
  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=animal&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photoData: res.data.photos.photo
        })
      })
      .catch(err => {
        console.log(err);
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
       this.setState({
          catsData: res.data.photos.photo
        })
      })
      .catch(err => {
        console.log(err);
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          dogsData: res.data.photos.photo
        })
      })
      .catch(err => {
        console.log(err);
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          computersData: res.data.photos.photo
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  // function accepts a query parameter and requests data from Flickr API with query parameter
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photoData: res.data.photos.photo
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/*// Turn Search form into a Componenent*/}
          {/* Check Data Fetching in React Search Form Component */}
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer photoData={this.state.photoData}/>}/>
            <Route exact path="/cats" render={ () => <PhotoContainer photoData={this.state.catsData}/>}/>
            <Route exact path="/dogs" render={ () => <PhotoContainer photoData={this.state.dogsData}/>}/>
            <Route exact path="/computers" render={ () => <PhotoContainer photoData={this.state.computersData}/>}/>
            <Route path="/:query" render={ () => <PhotoContainer onSearch={this.performSearch} photoData={this.state.photoData}/>}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
