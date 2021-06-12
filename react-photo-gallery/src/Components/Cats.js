import React from 'react';
import PhotoContainer from './PhotoContainer';

const Cats = (props) => {
        //props.onSearch('cats');
        
        return(
        <PhotoContainer photoData={props.photoData} />
        )
}

export default Cats;