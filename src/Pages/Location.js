import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../Service/data.service';
import Map from '../Components/Map';
import PageMainInfo from '../Components/PageMainInfo';

const MapDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
`;

const AddressDiv = styled.div`
  margin: 0 1rem 2rem 1rem;
  display: grid;
  grid-template-columns: auto;
  justify-content: left;
`;

const AddressTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

const AddressText = styled.div`
  margin: 0.5rem 0.2rem 0 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

export default class Location extends Component {
  state = {
    about: {},
    pageMainInfo: {}
  };

  componentDidMount() {
    this.setState({
      about: DataService.getAbout(),
      pageMainInfo: DataService.getPageMainInfo(4)
    });
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pageMainInfo.title}</title>
        </Helmet>
        <PageMainInfo pageMainInfo={this.state.pageMainInfo} />
        <MapDiv>
          <Map
            center={[42.81987, -1.61323]}
            id="mapBricovidrio"
            zoom={13}
            mapTypeId={'road'}
            navigationBarMode={'compact'}
            supportedMapTypes={['road']}
            infoboxesWithPushPins={[
              {
                location: [42.80895, -1.61174],
                addHandler: 'mouseover', //on mouseover the pushpin, infobox shown
                infoboxOption: {
                  title: 'Tienda',
                  description:
                    'Calle Concejo de Olaz, 1, 31016 Mendillorri (Navarra)'
                },
                pushPinOption: { title: 'Tienda', description: '' }
              },
              {
                location: [42.82582, -1.60555],
                addHandler: 'mouseover', //on mouseover the pushpin, infobox shown
                infoboxOption: {
                  title: 'Taller',
                  description: 'Calle Irumuga, 9, 31620 Huarte (Navarra)'
                },
                pushPinOption: { title: 'Taller', description: '' }
              }
            ]}
          />
          <AddressDiv>
            <div>
              <AddressTitle>Tienda</AddressTitle>
              <AddressText>Calle Concejo de Olaz, 1</AddressText>
              <AddressText>31016 - Mendillorri (Navarra)</AddressText>
              <AddressText>
                <FontAwesomeIcon icon={faPhone} /> /{' '}
                <FontAwesomeIcon icon={faFax} /> 948 163 781
              </AddressText>
              <br />
              <AddressTitle>Taller</AddressTitle>
              <AddressText>Pol. Areta Calle G - Nave 13</AddressText>
              <AddressText>31620 - Huarte (Navarra) </AddressText>
              <AddressText>
                <FontAwesomeIcon icon={faPhone} /> 948 333 457 -{' '}
                <FontAwesomeIcon icon={faFax} /> 948 331 134
              </AddressText>
            </div>
          </AddressDiv>
        </MapDiv>
      </React.Fragment>
    );
  }
}
