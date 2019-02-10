import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const ItemDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
`;

const ItemImg = styled.img`
  margin: 0.5rem 0.2rem 0.5rem 0.5rem;
`;

const ItemTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

const ItemText = styled.div`
  margin: 0.5rem 0.2rem 1rem 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

const ItemLink = styled.div`
  background-color: #1352b1;
  padding: 0.5rem;
  margin: 0.2rem 0.2rem 0 0.5rem;
  display: inline-block;
  .link {
    border: 0;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      border-bottom: 1px white solid;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <ItemDiv>
        <ItemImg src={item.img} alt={item.alt} />
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          {item.text && Object.keys(item.text).map(key => (
            <ItemText key={key}>{item.text[key]}</ItemText>
          ))}
          {item.link && (
            <ItemLink>
              <Link className="link" to={item.link.to}>
                {item.link.description}{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </ItemLink>
          )}
        </div>
      </ItemDiv>
    );
  }
}
