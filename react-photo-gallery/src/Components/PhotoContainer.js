import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {
        // if (this.props.query) {
        //   this.props.onSearch(this.props.query);
        // }
        //console.log(props.match.query);
        let results = props.photoData;
        console.log('PhotoList Results: ', results);
        let photos = results.map(photo => 
            <Photo 
                key={photo.id}
                id={photo.id}
                farm={photo.farm}
                server={photo.server}
                secret={photo.secret}
                title={props.title}
            />);
        
//   let farmId = photo.farm;
//   let serverId = photo.server;
//   let id = photo.id;
//   let secret = photo.secret;
        return(            
        <div className="photo-container">

        {/* Use Fetch to connect to Flickr API, and .then parse with .json(), .then this.setState,  .catch errors */}
        {/*Turn photoContainer into a component, and create a photo component, pass data prop to PhotoContainer*/}
        <h2>Results</h2>
        <ul>
          {console.log("photos", photos)}
          {(photos.length > 0) ? photos : <NotFound/>}
          
        </ul>
      </div>
        )
}

export default PhotoContainer;