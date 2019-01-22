import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

export const HomePage = styled.div`
  margin: 0 2rem 0 2rem;
  width: 100%;
`;

export const CarouselDiv = styled.div`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
`;

export const CarouselButton = styled.button`
  font-size: 3rem;
  color: #1352b1;
  cursor: pointer;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
`;

export const HomeDetail = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 1rem 0 1rem 0;
  width: 100%;
`;
export const HomeDetailElement = styled.div`
  background-color: white;
  margin: 0 1rem 0 1rem;
  padding: 0 2rem 0 2rem;
  display: grid;
  grid-template-columns: auto auto;
`;
export const HomeDetailElementTextDiv = styled.div`
  display: grid;
  grid-template-columns: auto;
`;
export const HomeDetailElementText = styled.div`
  margin: 0 0.2rem 0 0.5rem;
`;
export const HomeSystemGlassDiv = styled.div`
  background-color: white;
  margin: 1rem 1rem 0 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Cristaleria Bricovidrio</title>
        </Helmet>
        <CarouselDiv>
          <Carousel //     <FontAwesomeIcon icon={faAngleDoubleRight} /> //   <CarouselButton onClick={nextSlide}> // renderCenterRightControls={({ nextSlide }) => ( // )} //   </CarouselButton> //     <FontAwesomeIcon icon={faAngleDoubleLeft} /> //   <CarouselButton onClick={previousSlide}> // renderCenterLeftControls={({ previousSlide }) => (
            //   </CarouselButton>
            // )}
            cellAlign="center"
            cellSpacing={10}
            slidesToShow={2}
            wrapAround={true}
            enableKeyboardControls={true}
            autoplay={true}
            autoplayInterval={2000}
          >
            <img src="./img/h-bricovidrio-01.png" alt="image1" />
            <img src="./img/h-bricovidrio-02.png" alt="image2" />
            <img src="./img/h-bricovidrio-03.png" alt="image3" />
            <img src="./img/h-bricovidrio-04.png" alt="image4" />
            <img src="./img/h-bricovidrio-05.png" alt="image5" />
            <img src="./img/h-bricovidrio-06.png" alt="image6" />
            <img src="./img/h-bricovidrio-07.png" alt="image7" />
          </Carousel>
        </CarouselDiv>
        <HomeDetail>
          <HomeDetailElement>
            <img
              src="./img/d-decoracion-vidrio.png"
              alt="d-decoracion-vidrio"
            />
            <HomeDetailElementTextDiv>
              <HomeDetailElementText>VINILOS DECORATIVOS</HomeDetailElementText>
              <HomeDetailElementText>
                Para su hogar o negocio
              </HomeDetailElementText>
              <HomeDetailElementText>
                Una nueva tendencia en decoración que permite, de manera rápida
                y sencilla, decorar tu casa o tu negocio a tu gusto,
                convirtiéndolo en un espacio personalizado. Aquí encontrarás
                muchas ideas para ayudarte en la elección.
              </HomeDetailElementText>
            </HomeDetailElementTextDiv>
          </HomeDetailElement>
          <HomeDetailElement>
            <img src="./img/d-vinilos.png" alt="d-vinilos" />
            <HomeDetailElementTextDiv>
              <HomeDetailElementText>
                SERVICIO A PROFESIONALES
              </HomeDetailElementText>
              <HomeDetailElementText>
                Instalaciones Comerciales
              </HomeDetailElementText>
              <HomeDetailElementText>
                Fabricación propia de espejos a medida, puertas correderas,
                separaciones de ambiente, encimeras para cocina y baños.
                Acristalamientos para obras, ventanas, escaparates y espejos.
                Manipulado y transformación de vidrio plano.
              </HomeDetailElementText>
            </HomeDetailElementTextDiv>
          </HomeDetailElement>
          <HomeSystemGlassDiv>
            <img src="./img/systemglass-fondo.png" alt="systemglass-fondo" />
          </HomeSystemGlassDiv>
        </HomeDetail>
      </div>
    );
  }
}

export default Home;
