import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

export const HomePage = styled.div`
  width: 100%;
`;

export const CarouselDiv = styled.div`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
`;

export const CarouselButton = styled.button`
  font-size: 1.5rem;
  border: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10px;
  opacity: 1;
  cursor: pointer;
`;

export const HomeDetail = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 2rem 0 1rem 0;
`;

export const HomeDetailElementLeft = styled.div`
  background-color: white;
  margin: 0 1rem 0 4rem;
  padding: 0 2rem 0 2rem;
  display: grid;
  grid-template-columns: auto auto;
`;

export const HomeDetailElementRight = styled.div`
  background-color: white;
  margin: 0 4rem 0 1rem;
  padding: 0 2rem 0 2rem;
  display: grid;
  grid-template-columns: auto auto;
`;

export const HomeDetailElementTextDiv = styled.div`
  font-size: 1rem;
`;

export const HomeDetailElementTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 1rem 0.2rem 0 0.5rem;
`;

export const HomeDetailElementSubTitle = styled.div`
  margin: 0.2rem 0.2rem 0 0.5rem;
`;

export const HomeDetailElementText = styled.div`
  margin: 0.5rem 0.2rem 1rem 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

export const HomeDetailElementImg = styled.div`
  margin: 1rem 0 1rem 0;
`;

export const HomeSystemGlassDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 0 4rem;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
`;

export const LinkDiv = styled.div`
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

class Home extends Component {
  render() {
    return (
      <HomePage>
        <Helmet>
          <title>Cristaleria Bricovidrio</title>
        </Helmet>
        <CarouselDiv>
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <CarouselButton onClick={previousSlide}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </CarouselButton>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <CarouselButton onClick={nextSlide}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </CarouselButton>
            )}
            cellAlign="center"
            cellSpacing={10}
            wrapAround={true}
            autoplay={true}
            autoplayInterval={2000}
            slideWidth={0.7}
          >
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362088/Bricovidrio/h-bricovidrio-01.jpg" alt="image1" />
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/h-bricovidrio-02.jpg" alt="image2" />
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/h-bricovidrio-03.jpg" alt="image3" />
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/h-bricovidrio-04.jpg" alt="image4" />
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/h-bricovidrio-05.jpg" alt="image5" />
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/h-bricovidrio-06.jpg" alt="image6" />
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/h-bricovidrio-07.jpg" alt="image7" />
          </Carousel>
        </CarouselDiv>
        <HomeDetail>
          <HomeDetailElementLeft>
            <HomeDetailElementImg>
              <img
                src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/d-decoracion-vidrio.jpg"
                alt="d-decoracion-vidrio"
              />
            </HomeDetailElementImg>
            <HomeDetailElementTextDiv>
              <HomeDetailElementTitle>
                VINILOS DECORATIVOS
              </HomeDetailElementTitle>
              <HomeDetailElementSubTitle>
                Para su hogar o negocio
              </HomeDetailElementSubTitle>
              <HomeDetailElementText>
                Una nueva tendencia en decoración que permite, de manera rápida
                y sencilla, decorar tu casa o tu negocio a tu gusto,
                convirtiéndolo en un espacio personalizado. Aquí encontrarás
                muchas ideas para ayudarte en la elección.
              </HomeDetailElementText>
              <LinkDiv>
                <Link className="link" to={'/trabajos'}>
                  Trabajos de vinilos{' '}
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
              </LinkDiv>
            </HomeDetailElementTextDiv>
          </HomeDetailElementLeft>
          <HomeDetailElementRight>
            <HomeDetailElementImg>
              <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/d-vinilos.jpg" alt="d-vinilos" />
            </HomeDetailElementImg>
            <HomeDetailElementTextDiv>
              <HomeDetailElementTitle>
                SERVICIO A PROFESIONALES
              </HomeDetailElementTitle>
              <HomeDetailElementSubTitle>
                Instalaciones Comerciales
              </HomeDetailElementSubTitle>
              <HomeDetailElementText>
                Fabricación propia de espejos a medida, puertas correderas,
                separaciones de ambiente, encimeras para cocina y baños.
                Acristalamientos para obras, ventanas, escaparates y espejos.
                Manipulado y transformación de vidrio plano.
              </HomeDetailElementText>
              <LinkDiv>
                <Link className="link" to={'/trabajos'}>
                  Instalaciones comerciales{' '}
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
              </LinkDiv>
            </HomeDetailElementTextDiv>
          </HomeDetailElementRight>
          <HomeSystemGlassDiv>
            <img src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362089/Bricovidrio/systemglass-fondo.jpg" alt="systemglass-fondo" />
          </HomeSystemGlassDiv>
        </HomeDetail>
      </HomePage>
    );
  }
}

export default Home;
