import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { DataService } from '../Service/data.service';

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
    font-weight: 700;
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
  state = {
    menuOptions: {},
    dataMenuTop: {},
    dataMenuBottom: {}
  };

  componentDidMount() {
    this.setState({
      menuOptions: DataService.getMenuOptions(),
      dataMenuTop: DataService.getDataMenuTop(),
      dataMenuBottom: DataService.getDataMenuBottom()
    });
  }
  render() {
    return (
      <header>
        <MenuStyle>
          <Logo>
            <Link to={'/'}>
              <img
                src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/logo.jpg"
                alt="logo"
              />
            </Link>
          </Logo>
          <DataMenu>
            <DataMenuTop>
              {Object.keys(this.state.dataMenuTop).map(key => (
                <div key={key}>
                  <DataMenuText>
                    {this.state.dataMenuTop[key].description}
                  </DataMenuText>
                  <FontAwesomeIcon icon={faPhone} />
                  <DataMenuText>
                    {this.state.dataMenuTop[key].phone}
                  </DataMenuText>
                </div>
              ))}
            </DataMenuTop>
            <DataMenuBottom>
              {Object.keys(this.state.dataMenuBottom).map(key => (
                <div key={key}>
                  <DataMenuText>
                    {this.state.dataMenuBottom[key].description}
                  </DataMenuText>
                  {this.state.dataMenuBottom[key].separator}
                </div>
              ))}
            </DataMenuBottom>
          </DataMenu>
          <BarMenu>
            <NavStyles>
              {Object.keys(this.state.menuOptions).map(key => (
                <li key={key}>
                  <Link className="link" to={this.state.menuOptions[key].to}>
                    {this.state.menuOptions[key].description}
                  </Link>
                </li>
              ))}
            </NavStyles>
          </BarMenu>
        </MenuStyle>
      </header>
    );
  }
}

export default Menu;
