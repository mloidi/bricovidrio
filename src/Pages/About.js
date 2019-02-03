import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { DataService } from '../Service/data.service';
import Item from '../Components/Item';
import PageMainInfo from '../Components/PageMainInfo';

export default class About extends Component {
  state = {
    about: {},
    pageMainInfo: {}
  };

  componentDidMount() {
    this.setState({
      about: DataService.getAbout(),
      pageMainInfo: DataService.getPageMainInfo(1)
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pageMainInfo.title}</title>
        </Helmet>
        <PageMainInfo pageMainInfo={this.state.pageMainInfo} />
        {Object.keys(this.state.about).map(key => (
          <Item key={key} item={this.state.about[key]} />
        ))}
      </React.Fragment>
    );
  }
}
