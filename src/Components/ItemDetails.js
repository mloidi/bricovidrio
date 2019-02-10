import React, { Component } from 'react';
import styled from 'styled-components';


const ItemDiv = styled.div`
  background-color: white;
  margin: 0 1rem 2rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto;
  justify-content: left;
`;

const ItemHeader = styled.div`
  margin: 1rem 0 2rem 0;
  display: grid;
  grid-template-columns: auto auto;
`;

const ItemHeaderRight = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const ItemImg = styled.img`
  margin: 0.5rem 0.2rem 0.5rem 0.5rem;
`;

const ItemTitle = styled.div`
  color: #1352b1;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

const ItemText = styled.div`
  margin: 0.5rem 0.2rem 1rem 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

const ItemDetail = styled.div`
  margin: 1rem 0 2rem 0;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  border-top: 0.1rem solid #1352b1;
`;

export default class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <ItemDiv>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemHeader>
          <ItemImg src={item.img} alt={item.alt} />
          <div>
            <ItemHeaderRight>
              {item.text &&
                Object.keys(item.text).map(key => (
                  <ItemText key={key}>{item.text[key]}</ItemText>
                ))}
            </ItemHeaderRight>
          </div>
        </ItemHeader>
          <ItemDetail>
            {item.projects &&
              Object.keys(item.projects).map(key => (
                <ItemImg
                  key={key}
                  src={item.projects[key]}
                  alt={item.projects[key]}
                />
              ))}
          </ItemDetail>
      </ItemDiv>
    );
  }
}
