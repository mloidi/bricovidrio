import React, { Component } from 'react';

import styled from 'styled-components';

const LegalDiv = styled.div`
  background-color: white;
  margin: 1rem 2rem 1rem 2rem;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 1rem;
`;

const LegalTitle = styled.div`
  color: #1352b1;
  text-transform: uppercase;
  margin: 1rem 0.2rem 0 0.5rem;
`;

const LegalText = styled.div`
  margin: 0.5rem 0.2rem 1rem 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

export default class Legal extends Component {
  render() {
    return (
      <LegalDiv>
        <LegalTitle>Datos identificativos</LegalTitle>
        <LegalText>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10
            de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y del Comercio Electrónico, a continuación se exponen
            los siguientes datos: La empresa titular: Bicovidrio SL con
            domicilio en Calle Concejo de Olaz, 1 31016 - Mendillorri (Navarra)
            con número de NIF.:<strong>B31733959</strong> (en adelante,
            BRICOVIDRIO). Correo electrónico de contacto
            cristaleria@bricovidrio.es y teléfono de contacto 948 163 781.
          </p>
        </LegalText>
        <LegalTitle>Protección de datos</LegalTitle>
        <LegalText>
          <p>
            De conformidad con lo dispuesto en el Art. 5 y 6 de la Ley Orgánica
            15/1999 de Protección de Datos de Carácter Personal, así como en los
            artículos 12, 14 y 18 del R.D. 1720/2007 de 21 de diciembre, le
            informamos que los datos suministrados pasarán a formar parte del
            fichero Clientes de BRICOVIDRIO, autorizando expresamente que los
            mismos sean objeto de tratamiento para atender su solicitud, tanto
            por vía electrónica como no electrónica.
          </p>
          <p>
            Así mismo, queda informado de la posibilidad de ejercer sus derechos
            de acceso, rectificación, cancelación y oposición (previstos en los
            artículos 15, 16 y 17 de la LOPD, así como en los artículos 23 a 36
            ambos inclusive del R.D. 1720/2007 de 21 de diciembre) por medio de
            comunicación a la siguiente dirección de correo electrónico
            cristaleria@bricovidrio.es y mediante carta dirigida a:
          </p>
          <p>
            <strong>CRISTALERÍA BRICOVIDRIO</strong>
            <br />
            Calle Concejo de Olaz, 1
            <br />
            31016 - Mendillorri (Navarra)
          </p>
        </LegalText>
        <LegalTitle>Propiedad intelectual</LegalTitle>
        <LegalText>
          <p>
            La información y los contenidos que se recogen en el presente sitio
            web, así como el código fuente, los diseños gráficos, las imágenes,
            las fotografías, el software y los textos, están protegidos por la
            legislación española sobre los derechos de propiedad intelectual e
            industrial a favor de BRICOVIDRIO y no se permite la reproducción
            y/o publicación, total o parcial, del sitio web, ni su tratamiento
            informático, su distribución, su difusión, ni su modificación,
            transformación o descompilación, ni demás derechos reconocidos
            legalmente a su titular, sin el permiso previo y por escrito del
            mismo.
          </p>
          <p>
            Todos los derechos derivados de la propiedad intelectual están
            expresamente reservados por BRICOVIDRIO. El usuario, única y
            exclusivamente, puede utilizar el material que aparezca en este
            sitio web para su uso personal y privado, quedando prohibido su uso
            con fines comerciales o para incurrir en actividades ilícitas.
          </p>
          <p>
            BRICOVIDRIO velará por el cumplimiento de las anteriores condiciones
            como por la debida utilización de los contenidos presentados en su
            página web, ejercitando todas las acciones civiles y penales que le
            correspondan en el caso de infracción o incumplimiento de estos
            derechos por parte del usuario.
          </p>
        </LegalText>
        <LegalTitle>Exclusión de garantías y responsabilidad</LegalTitle>
        <LegalText>
          <p>
            BRICOVIDRIO no se hace responsable, en ningún caso, de los daños y
            perjuicios de cualquier naturaleza que pudieran ocasionar, a título
            enunciativo: errores u omisiones en los contenidos, falta de
            disponibilidad del portal o la transmisión de virus o programas
            maliciosos o lesivos en los contenidos, a pesar de haber adoptado
            todas las medidas tecnológicas necesarias para evitarlo.
          </p>
        </LegalText>
        <LegalTitle>Modificaciones</LegalTitle>
        <LegalText>
          <p>
            BRICOVIDRIO se reserva el derecho de efectuar sin previo aviso las
            modificaciones que considere oportunas en su Site, pudiendo cambiar,
            suprimir o añadir tanto los contenidos y servicios que se presten a
            través de la misma como la forma en la que éstos aparezcan
            presentados o localizados en su Site.
          </p>
        </LegalText>
        <LegalTitle>Empleo de cookies</LegalTitle>
        <LegalText>
          <p>
            Las cookies son pequeños archivos que nuestro ordenador envía al
            suyo, pero que no nos proporcionan información ni sobre su nombre,
            ni sobre cualquier dato de carácter personal suyo. Cuando el usuario
            se encuentre navegando por las páginas web de BRICOVIDRIO el
            servidor donde se encuentra alojada reconoce automáticamente la
            dirección IP de su ordenador, el día y la hora en la que comienza la
            visita, en la que abandona la visita, así como información sobre las
            distintas secciones consultadas. Es necesario que el servidor
            conozca estos datos para poder comunicarse y enviarle la petición
            realizada y que a través del navegador se pueda ver en la pantalla.
          </p>
          <p>
            Además, BRICOVIDRIO utiliza cookies de terceros de Google Analytics.
            Google Analytics es una herramienta gratuita de análisis web de
            Google que principalmente permite que los propietarios de sitios web
            conozcan cómo interactúan los usuarios con su sitio web. Asimismo,
            habilita cookies en el dominio del sitio en el que te encuentras y
            utiliza un conjunto de cookies para recopilar información de forma
            anónima y con ella elaborar informes de tendencias de sitios web sin
            identificar a los usuarios individuales.
          </p>
        </LegalText>
        <LegalTitle>Generalidades</LegalTitle>
        <LegalText>
          <p>
            BRICOVIDRIO se compromete a través de este medio a NO REALIZAR
            PUBLICIDAD ENGAÑOSA. A estos efectos, por lo tanto, no serán
            considerados como publicidad engañosa los errores formales o
            numéricos que puedan encontrarse a lo largo del contenido de las
            distintas secciones del Site producidos como consecuencia de un
            mantenimiento y/o actualización incompleta o defectuosa de la
            información contenida es estas secciones. BRICOVIDRIO, como
            consecuencia de lo dispuesto en este apartado, se compromete a
            corregirlo tan pronto como tenga conocimiento de dichos errores.
          </p>
          <p>
            BRICOVIDRIO se compromete a NO REMITIR COMUNICACIONES COMERCIALES
            SIN IDENTIFICARLAS COMO TALES, conforme a lo dispuesto en la Ley
            34/2002 de Servicios de la Sociedad de la Información y de comercio
            electrónico. A estos efectos no será considerado como comunicación
            comercial toda la información que se envíe A LOS CLIENTES de
            BRICOVIDRIOsiempre que tenga por finalidad el mantenimiento de la
            relación contractual existente entre cliente y BRICOVIDRIO, así como
            el desempeño de las tareas de información, formación y otras
            actividades propias del servicio que el cliente tiene contratado con
            la empresa.
          </p>
          <p>
            BRICOVIDRIO no se hace responsable del incumplimiento de cualquier
            norma aplicable en que pueda incurrir el usuario en su acceso al
            sitio web el presente sitio web y/o en el uso de las informaciones
            contenidas en el mismo.
          </p>
        </LegalText>
        <LegalTitle>Legislación aplicable y Jurisdicción </LegalTitle>
        <LegalText>
          <p>
            Las presentes condiciones se regirán por las leyes españolas. En el
            supuesto de que se produzca cualquier discrepancia o controversia,
            con motivo de la interpretación o aplicación de las presentes
            condiciones, o bien que tengan relación con el uso del Sitio web,
            BRICOVIDRIO y el USUARIO, acuerdan, renunciando a su fuero propio si
            lo tuviesen, resolverla definitivamente, mediante Arbitraje de
            Derecho, que se celebrará en la ciudad de Pamplona, conforme a la
            Ley de Arbitraje de 5 de Diciembre de 1988.
          </p>
          <p>
            Ambas partes se comprometen a aceptar y cumplir el laudo arbitral y,
            de resultar precisa la formalización o ejecución judicial del laudo,
            o en el supuesto de que el arbitraje no se llevara a efecto, por
            mutuo acuerdo de las partes, o bien fuera declarado nulo, ambas
            partes, con renuncia a su propio fuero, si lo tuviesen, se someten a
            los Juzgados y Tribunales, competentes en el domicilio de
            BRICOVIDRIO.
          </p>
        </LegalText>
      </LegalDiv>
    );
  }
}
