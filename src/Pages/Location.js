import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Map from '../Components/Map';

class Location extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ubicacion | Cristaleria Bricovidrio</title>
        </Helmet>
        <p>Ubicacion - Cristaleria Bricovidrio</p>
        <Map
          center={[ 42.8168700, -1.6432300]}
          id="tienda"
          infoboxes = {
            [
              {
                "location":[42.8168700, -1.6432300], "option":{ title: 'Tienda', description: 'Tienda de Mendillorri' }
              },
              {
                "location":[42.8168700, -1.7432300], "option":{ title: 'Taller', description: 'Taller de Huarte' }
              }
            ]
          }
        />
      </div>
    );
  }
}

export default Location;
