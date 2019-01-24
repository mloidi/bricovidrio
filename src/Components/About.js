import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';

export const AboutMainDiv = styled.div`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  justify-content: center;
`;

export const AboutDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
`;

export const AboutTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

export const AboutText = styled.div`
  margin: 0.5rem 0.2rem 1rem 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

export const AboutImg = styled.img`
  margin: 0.5rem 0.2rem 0.5rem 0.5rem;
`;
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Quienes somos | Cristaleria Bricovidrio</title>
        </Helmet>
        <AboutMainDiv>
          <AboutImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362088/Bricovidrio/c-bricovidrio.jpg"
            alt="bricovidrio-cristaleria"
          />
        </AboutMainDiv>
        <AboutDiv>
          <AboutImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/bricovidrio-cristaleria.jpg"
            alt="bricovidrio-cristaleria"
          />
          <div>
            <AboutTitle>
              Más de 20 años de experiencia dedicada al mundo del cristal
            </AboutTitle>
            <AboutText>
              <strong>Bricovidrio</strong> somos una empresa con más de{' '}
              <strong>20 años de experiencia</strong>
              dedicada al <strong>cristal</strong>, acompañando en su
              trayectoria, la evolución y tendencias tecnológicas, para
              ofrecerles la <strong>máxima calidad</strong> de nuestros
              productos y aportar las mejores soluciones a sus necesidades de
              acristalamiento del <strong>vidrio plano</strong> y{' '}
              <strong>decorativo</strong>.
            </AboutText>
            <AboutText>
              Con nuestro equipo humano y sofisticada maquinaria que nos
              permiten acometer grandes proyectos, conseguimos realizar todo
              tipo de manufacturas, con un alto nivel de{' '}
              <strong>calidad y eficiencia</strong>.
            </AboutText>
            <AboutText>
              En <strong>Bricovidrio</strong> prestamos servicio tanto a
              profesionales del sector como al cliente final, aislando sus
              viviendas del frío y decorando sus interiores con una amplia gama
              de productos a medida y de fabricación propia.
            </AboutText>
          </div>
        </AboutDiv>
      </React.Fragment>
    );
  }
}

export default About;
