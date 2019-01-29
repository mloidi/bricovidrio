import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { DataService } from '../Service/data.service';
import PageMainInfo from '../Components/PageMainInfo';

export const ProjectsDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
`;

export const SubMenu = styled.ul`
  margin: 0;
  padding: 10px;
  font-size: 1.5rem;
  list-style-type: none;
`;

export const SubMenuElement = styled.li`
  background-color: #1352b1;
  border: 0;
  margin: 0 0 0.1rem 0;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
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
    margin: 1rem;
    color: white;
    text-decoration: none;
    outline: none;
    width: 100%;
  }
`;
export const SubMenuElementSelected = styled.li`
  background-color: white;
  border: 0;
  padding: 1rem;
  margin: 0 0 0.1rem 0;
  color: #1352b1;
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.7em;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const ProjectsDetailDiv = styled.div`
  background-color: white;
  padding: 0 1rem 1rem 1rem;
  font-size: 1rem;
`;

export const ProjectsDetailTitle = styled.div`
  color: #1352b1;
  font-size: 2rem;
  margin: 1rem 0 0.5rem 0;
`;

export const ProjectsDetailImg = styled.img`
  margin: 0.5rem;
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
          <ProjectsDetailDiv>
            <ProjectsDetailTitle>
              {this.state.selectedProject.description}
            </ProjectsDetailTitle>
            {this.state.selectedProject.projects &&
              Object.keys(this.state.selectedProject.projects).map(key => (
                <ProjectsDetailImg
                  key={key}
                  src={this.state.selectedProject.projects[key]}
                  alt={this.state.selectedProject.projects[key]}
                />
              ))}
          </ProjectsDetailDiv>
        </ProjectsDiv>
      </React.Fragment>
    );
  }
}

export default Projects;
