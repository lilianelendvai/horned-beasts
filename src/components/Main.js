import React from 'react';
import HornedBeast from './HornedBeast.js';

import data from '../data.json';

class Main extends React.Component {

  render() {
    return (
      <>
        {
          data.map( (value, index) => (
            <HornedBeast description={value.description} imageUrl={value.image_url} title={value.title} /> 
          ))
        }

      </>
    );
  }

}

export default Main;
