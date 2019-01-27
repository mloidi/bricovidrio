import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

export const FooterStyle = styled.div`
  background-color: #1352b1;
  display: grid;
  grid-template-columns: auto auto auto;
  font-size: 0.8rem;
  color: lightgrey;
  padding: 0.1rem 15% 0.1rem 15%;
  .link {
    color: lightgrey;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

export const FooterDataLeft = styled.div`
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 1rem 0.5rem 1em;
  border-right: 0.1rem white solid;
  display: flex;
  justify-content: flex-end;
`;

export const FooterDataLeftContent = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const FooterDataLeftContentTop = styled.div`
  margin: 0 0 0.2rem 0;
  color: white;
`;

export const FooterDataLeftContentBottom = styled.div`
  margin: 0.2rem 0 0 0;
`;

export const FooterDataCenter = styled.div`
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

export const FooterDataRight = styled.div`
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-left: 0.1rem white solid;
`;

export const AddressContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const AddressContentLeft = styled.div`
  color: white;
  text-transform: uppercase;
`;

export const AddressContentRight = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

class Footer extends Component {
  render() {
    return (
      <footer>
        <FooterStyle>
          <FooterDataLeft>
            <FooterDataLeftContent>
              <FooterDataLeftContentTop>
                <FontAwesomeIcon icon={faCopyright} /> Cristalería Bricovidrio,
                S.L.
              </FooterDataLeftContentTop>
              <FooterDataLeftContentBottom>
                <Link className="link" to={'/legal'}>
                  Aviso Legal
                </Link>
              </FooterDataLeftContentBottom>
            </FooterDataLeftContent>
          </FooterDataLeft>
          <FooterDataCenter>
            <AddressContent>
              <AddressContentLeft>TIENDA</AddressContentLeft>
              <AddressContentRight>
                <div>Calle Concejo de Olaz, 1</div>
                <div>31016 - Mendillorri (Navarra)</div>
                <div>
                  <FontAwesomeIcon icon={faPhone} /> /{' '}
                  <FontAwesomeIcon icon={faFax} /> 948 163 781
                </div>
              </AddressContentRight>
            </AddressContent>
          </FooterDataCenter>
          <FooterDataRight>
            <AddressContent>
              <AddressContentLeft>taller</AddressContentLeft>
              <AddressContentRight>
                <div>Pol. Areta Calle G - Nave 13</div>
                <div>31620 - Huarte (Navarra) </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} /> 948 333 457 -{' '}
                  <FontAwesomeIcon icon={faFax} /> 948 331 134
                </div>
              </AddressContentRight>
            </AddressContent>
          </FooterDataRight>
        </FooterStyle>
      </footer>
    );
  }
}

export default Footer;
