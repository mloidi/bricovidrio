import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

export const MenuStyle = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  grid-column-start: 1;
  grid-column-end: 3;
  img {
    height: auto;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export const BarMenu = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const DataMenu = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0 1rem 0 1rem;
`;

export const DataMenuTop = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
`;

export const DataMenuBottom = styled.p`
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-end;
`;

export const DataMenuText = styled.span`
  margin: 0 1rem 0 1rem;
`;

export const NavStyles = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-self: end;
  justify-content: center;
  font-size: 1.5rem;
  list-style-type: none;
  background-color: #1352b1;
  .link {
    border: 0;
    background: none;
    padding: 1rem 3rem;
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.7em;
    font-weight: 900;
    cursor: pointer;
    &:before {
      content: '';
      width: 2px;
      background: white;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-15deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: white;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

class Menu extends Component {
  render() {
    return (
      <header>
        <MenuStyle>
          <Logo>
            <Link to={'/'}>
              <img src="./img/logo.gif" alt="logo" />
            </Link>
          </Logo>
          <DataMenu>
            <DataMenuTop>
              <DataMenuText>Cristaleria Pamplona</DataMenuText>
              <FontAwesomeIcon icon={faPhone} />
              <DataMenuText>948 16 37 81</DataMenuText>
            </DataMenuTop>
            <DataMenuBottom>
              <DataMenuText>
                  VIDRIO 
                  </DataMenuText>
                  - 
                  <DataMenuText>
                  Cristaleria
                  </DataMenuText>-
                  <DataMenuText>
                  Fusing
                  </DataMenuText>-
                  <DataMenuText>
                  Vinilos
                  </DataMenuText>-
                  <DataMenuText>
                  Laminados
                  </DataMenuText>-
                  <DataMenuText>
                  Decoracion
                  </DataMenuText>
            </DataMenuBottom>
          </DataMenu>
          <BarMenu>
            <NavStyles>
              <li>
                <Link className="link" to={'/'}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="link" to={'/nosotros'}>
                  Cristaleria Bricovidrio
                </Link>
              </li>
              <li>
                <Link className="link" to={'/productos'}>
                  Productos
                </Link>
              </li>
              <li>
                <Link className="link" to={'/trabajos'}>
                  Trabajos realizados
                </Link>
              </li>
              <li>
                <Link className="link" to={'/ubicacion'}>
                  Ubicacion
                </Link>
              </li>
              <li>
                <Link className="link" to={'/contacto'}>
                  Contacto
                </Link>
              </li>
            </NavStyles>
          </BarMenu>
        </MenuStyle>
      </header>
    );
  }
}

export default Menu;
