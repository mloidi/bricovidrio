import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { DataService } from '../Service/data.service';
import PageMainInfo from '../Components/PageMainInfo';
import ItemDetails from '../Components/ItemDetails';

const ProjectsDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 0 1rem 0;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 25% auto;
  justify-content: left;
`;

const SubMenu = styled.ul`
  margin: 0;
  font-size: 1.5rem;
  list-style-type: none;
`;

const SubMenuElement = styled.li`
  background-color: #1352b1;
  border: 0;
  margin: 0 0 0.1rem 0;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: #1265e3;
  }
  &:focus {
    outline: none;
    &:after {
      width: calc(100% - 60px);
    }
  }
  a {
    margin: 0.5rem;
    color: white;
    text-decoration: none;
    outline: none;
    width: 100%;
  }
`;
const SubMenuElementSelected = styled.li`
  background-color: #1265e3;
  border: 0;
  padding: 0.5rem;
  margin: 0 0 0.1rem 0;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ProjectDetail = styled.div`
  background-color: white;
  padding: 0 1rem 1rem 1rem;
  font-size: 1rem;
`;

class Projects extends Component {
  state = {
    projects: {},
    pageMainInfo: {},
    id: '',
    selectedProject: {}
  };

  componentDidMount() {
    this.setState({
      projects: DataService.getProjects(),
      pageMainInfo: DataService.getPageMainInfo(3),
      id: this.props.match.params.id
        ? this.props.match.params.id
        : DataService.getProjects()[0].slug,
      selectedProject: DataService.getProject(
        this.props.match.params.id
          ? this.props.match.params.id
          : DataService.getProjects()[0].slug
      )
    });
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pageMainInfo.title}</title>
        </Helmet>
        <PageMainInfo pageMainInfo={this.state.pageMainInfo} />
        <ProjectsDiv>
          <SubMenu>
            {Object.keys(this.state.projects).map(key => (
              <React.Fragment key={key}>
                {this.state.projects[key].slug === this.state.id ? (
                  <SubMenuElementSelected>
                    {this.state.projects[key].description}
                  </SubMenuElementSelected>
                ) : (
                  <SubMenuElement
                    onClick={() => {
                      this.setState({
                        id: this.state.projects[key].slug,
                        selectedProject: DataService.getProject(
                          this.state.projects[key].slug
                        )
                      });
                      this.props.history.push(this.state.projects[key].link.to);
                    }}
                  >
                    <Link to={this.state.projects[key].link.to}>
                      {this.state.projects[key].description}
                    </Link>
                  </SubMenuElement>
                )}
              </React.Fragment>
            ))}
          </SubMenu>
          <ProjectDetail>
            <ItemDetails item={this.state.selectedProject}/>
          </ProjectDetail>
        </ProjectsDiv>
      </React.Fragment>
    );
  }
}

export default Projects;
