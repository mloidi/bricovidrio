import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Cristaleria Bricovidrio</title>
        </Helmet>
        <p>Inicio - Cristaleria Bricovidrio</p>
      </div>
    );
  }
}

export default Home;
