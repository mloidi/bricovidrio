import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FooterStyle = styled.div`
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

const FooterDataLeft = styled.div`
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 1rem 0.5rem 1em;
  border-right: 0.1rem white solid;
  display: flex;
  justify-content: flex-end;
`;

const FooterDataLeftContent = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const FooterDataLeftContentTop = styled.div`
  margin: 0 0 0.2rem 0;
  color: white;
`;

const FooterDataLeftContentBottom = styled.div`
  margin: 0.2rem 0 0 0;
`;

const FooterDataCenter = styled.div`
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const FooterDataRight = styled.div`
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-left: 0.1rem white solid;
`;

const AddressContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const AddressContentLeft = styled.div`
  color: white;
  text-transform: uppercase;
`;

const AddressContentRight = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export default class Footer extends Component {
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
          <FooterDataCenter />
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
