import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

export const ProductMainDiv = styled.div`
  background-color: white;
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  justify-content: center;
`;

export const ProductDiv = styled.div`
  background-color: white;
  margin: 2rem 4rem 2rem 4rem;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  display: flex;
  justify-content: flex-start;
`;

export const ProductTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 0.5rem 0.2rem 0 0.5rem;
`;

export const ProductText = styled.div`
  margin: 0.5rem 0.2rem 1rem 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

export const ProductImg = styled.img`
  margin: 0.5rem 0.2rem 0.5rem 0.5rem;
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
class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Productos | Cristaleria Bricovidrio</title>
        </Helmet>
        <ProductMainDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362088/Bricovidrio/c-productos.jpg"
            alt="c-productos"
          />
        </ProductMainDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-cristaleria.jpg"
            alt="p-cristaleria"
          />
          <div>
            <ProductTitle>Cristalería en general</ProductTitle>
            <ProductText>
              Llevamos muchos años sirviendo a miles de hogares y empresas,
              aislando sus viviendas del frío y decorando sus interiores con una
              amplia gama de productos a medida y de fabricación propia. Mesas
              de cristal, mamparas de baño, vitrinas, escaparates con decoración
              de vinilos, correderas de cristal, cortinas de vidrio, espejos,
              etc. Hay una gran variedad de manufacturas que se le pueden
              realizar al cristal, como el canto pulido brillante, biselado,
              esquinas redondeadas, vidrios lacados de colores. Contamos con
              maquinaría de vanguardia que nos permiten acometer grandes
              proyectos y también contamos con una grúa para los paneles de gran
              tamaño.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de cristalería en general{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-cortinas-cristal.jpg"
            alt="p-cortinas-cristal"
          />
          <div>
            <ProductTitle>
              Cortinas de cristal. Cerramiento acristalado "Sytemglass"
            </ProductTitle>
            <ProductText>
              De fácil instalación, con un mínimo impacto visual en el entorno
              arquitectónico. Máximo aprovechamiento de espacios infravalorados
              de la vivienda, como terrazas, porches, galerías, ventanales, etc.
              Muy prácticas y fáciles de limpiar tanto por dentro, como por
              fuera, ya que toda la estructura se recoge facilitando su
              limpieza. Sistema de seguridad con bloqueo infantil y cerradura
              antirrobo. Los perfiles inferiores pueden estar embutidos, lo que
              facilita el acceso a sillas de ruedas, carritos de bebés, etc
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de cortinas de cristal{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-instalaciones-comerciales.jpg"
            alt="p-instalaciones-comerciales"
          />
          <div>
            <ProductTitle>
              Instalaciones comercialesCortinas de cristal. Cerramiento
              acristalado "Sytemglass"
            </ProductTitle>
            <ProductText>
              Disponemos en nuestro taller de las últimas tecnologías,
              herramientas y medios necesarios para llevar a cabo instalaciones
              comerciales, tanto en oficinas, tiendas, bares, restaurantes, etc.
            </ProductText>
            <ProductText>
              Nos encargamos de la realización global, desde el proyecto inicial
              hasta la colocación de acristalamientos para obras, ventanas,
              puertas correderas, separaciones de ambiente, escaparates,
              espejos, encimeras para cocina y baños, mamparas fijas y
              correderas de ducha...
            </ProductText>
            <ProductText>
              Disponemos de una amplia variedad de productos avaladas por unos
              proveedores de garantía y calidad contrastada en el mercado
              nacional. comerciales, tanto en oficinas, tiendas, bares,
              restaurantes, etc.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de instalaciones comerciale{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-vidrios-decorados.jpg"
            alt="p-vidrios-decorados"
          />
          <div>
            <ProductTitle>Vidrio decorados</ProductTitle>
            <ProductText>
              Distintas técnicas se emplean para este fin. El arenado, vidrios
              lacados, todo tipo de laminados impresos con telas, con las
              impresiones entre dos cristales y otros con fotos.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de vidrio decorado{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-vidrieras.jpg"
            alt="p-vidrieras"
          />
          <div>
            <ProductTitle>Vidrieras</ProductTitle>
            <ProductText>
              Es la técnica mediante la cual se pintan cristales siguiendo un
              patrón y uniéndolos con tiras de plomo. Existen otras técnicas.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de vidrieras{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-biselados.jpg"
            alt="p-biselados"
          />
          <div>
            <ProductTitle>Biselados</ProductTitle>
            <ProductText>
              Este proceso permite dar un ángulo al canto del cristal,
              provocando una reflexión diferente a la cara plana. Ideal para
              cristales de un grosor a partir de 5mm.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de biselados{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-espejos.jpg"
            alt="p-espejos"
          />
          <div>
            <ProductTitle>Espejos</ProductTitle>
            <ProductText>
              Nuestra propuesta es amplia y abarca una gran gama de
              posibilidades, de formas, de tonos y espesores.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de espejos{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-fusing.jpg"
            alt="p-fusing"
          />
          <div>
            <ProductTitle>Fusing</ProductTitle>
            <ProductText>
              Se trata de una novedosa técnica que emplea hornos con altas
              temperaturas para fundir vidrios de color sobre unas planchas de
              vidrio especiales, consiguiendo así bellas soluciones decorativas.
              de
            </ProductText>
            <ProductText>
              Los colores conseguidos son inalterables. Se pueden emplear para
              decorar espejos de baño, puertas de paso y lavabos de cristal.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de Fusing{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-mamparas.jpg"
            alt="p-mamparas"
          />
          <div>
            <ProductTitle>Mamparas de baño</ProductTitle>
            <ProductText>
              Fijos, con correderas, distintos tipos de cristas, con o sin
              decorado.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de mamparas de baño{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-lavabos.jpg"
            alt="p-lavabos"
          />
          <div>
            <ProductTitle>Encimeras de seno integrado</ProductTitle>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de mamparas de baño{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362087/Bricovidrio/p-vinilos-decorativos.jpg"
            alt="p-vinilos-decorativos"
          />
          <div>
            <ProductTitle>Vinilos decorativos</ProductTitle>
            <ProductText>
              Una nueva tendencia en decoración permite, de manera rápida y
              sencilla, decorar tu casa o tu negocio a tu gusto, convirtiéndolo
              en un espacio personalizado.
            </ProductText>
            <ProductText>
              Los vinilos decorativos son muy versátiles y contamos con las
              herramientas adecuadas para poder llevar a cabo diferentes
              proyectos y aplicaciones, como por ejemplo, <strong>cristal laminado con
              fotografía impresa, vinilos ácidos con imágenes vectoriales</strong>,
              ideales para tiendas, bares o grandes escaparates.
            </ProductText>
            <ProductText>
              Pueden pegarse sobre paredes, suelos, ventanas, puertas, muebles y
              en general, sobre cualquier superficie lisa, ya sea madera, chapa,
              plástico, etc.
            </ProductText>
            <ProductText>
              El límite está solamente en tu imaginación. Aquí encontrarás
              muchas ideas para ayudarte en la elección.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de vinilos decorativos{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
        <ProductDiv>
          <ProductImg
            src="https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-pegados-por-uv.jpg"
            alt="p-pegados-por-uv."
          />
          <div>
            <ProductTitle>Pegados por rayos UV</ProductTitle>
            <ProductText>
              Adesivo especial, es casi transparente y muy resistente.
            </ProductText>
            <LinkDiv>
              <Link className="link" to={'/trabajos'}>
                Trabajos de pegados por rayos UV{' '}
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </LinkDiv>
          </div>
        </ProductDiv>
      </React.Fragment>
    );
  }
}

export default Products;
