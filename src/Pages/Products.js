import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { DataService } from '../Service/data.service';
import Item from '../Components/Item';
import PageMainInfo from '../Components/PageMainInfo';

export default class Products extends Component {
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
