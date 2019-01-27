import React, { Component } from 'react';
import styled from 'styled-components';

export const PageMainInfoDiv = styled.div`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

export const PageMainInfoImg = styled.img`
  margin: 0.5rem 0.2rem 0.5rem 0.5rem;
`;

export const PageMainInfoTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

export default class PageMainInfo extends Component {
  render() {
    const { pageMainInfo } = this.props;
    return (
      <PageMainInfoDiv>
        <PageMainInfoImg src={pageMainInfo.img} alt={pageMainInfo.alt} />
        <PageMainInfoTitle>{pageMainInfo.description}</PageMainInfoTitle>
      </PageMainInfoDiv>
    );
  }
}
