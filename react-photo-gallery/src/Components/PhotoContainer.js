import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

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
          {photos}  
          {/* <li>
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
          </li> */}
          {/*<!-- Not Found -->*/}

          {/* Great NotFound Component and display if empty results */}
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
        )
}

export default PhotoContainer;