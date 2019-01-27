import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { DataService } from '../Service/data.service';
import Item from '../Components/Item';
import PageMainInfo from '../Components/PageMainInfo';

export const ProductMainDiv = styled.div`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  justify-content: center;
`;

export const ProductImg = styled.img`
  margin: 0.5rem 0.2rem 0.5rem 0.5rem;
`;

class Products extends Component {
  state = {
    products: {},
    pageMainInfo: {}
  };

  componentDidMount() {
    this.setState({
      products: DataService.getProducts(),
      pageMainInfo: DataService.getPageMainInfo(2)
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pageMainInfo.title}</title>
        </Helmet>
        <PageMainInfo pageMainInfo={this.state.pageMainInfo} />
        {Object.keys(this.state.products).map(key => (
          <Item key={key} item={this.state.products[key]} />
        ))}
      </React.Fragment>
    );
  }
}

export default Products;
