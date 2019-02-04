const menuOptions = [
  {
    id: 1,
    to: '/',
    description: 'Inicio'
  },
  {
    id: 2,
    to: '/nosotros',
    description: 'Cristaleria Bricovidrio'
  },
  {
    id: 3,
    to: '/productos',
    description: 'Productos'
  },
  {
    id: 4,
    to: '/trabajos',
    description: 'Trabajos realizados'
  },
  {
    id: 5,
    to: '/contacto',
    description: 'Contacto'
  }
];

const dataMenuTop = [
  { description: 'Cristaleria en Pamplona', phone: '948 16 37 81' }
];

const dataMenuBottom = [
  { description: 'vidrio', separator: '|' },
  { description: 'cristaleria', separator: '|' },
  { description: 'fusing', separator: '|' },
  { description: 'vinilos', separator: '|' },
  { description: 'laminados', separator: '|' },
  { description: 'decoracion', separator: null }
];

const pageMainInfo = [
  {
    id: 1,
    description: 'Sobre nosotros',
    title: 'Sobre nosotros | Cristaleria Bricovidrio',
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362088/Bricovidrio/c-bricovidrio.jpg',
    alt: 'bricovidrio-cristaleria'
  },
  {
    id: 2,
    description: 'Productos de cristaleria bricovidrio',
    title: 'Productos | Cristaleria Bricovidrio',
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best/v1548362088/Bricovidrio/c-productos.jpg',
    alt: 'c-productos'
  },
  {
    id: 3,
    description: 'trabajos realizados',
    title: 'Trabajos realizados | Cristaleria Bricovidrio',
    img:
      'https://res.cloudinary.com/mloidi/image/upload/v1548581423/Bricovidrio/c-trabajos.png',
    alt: 'c-trabajos'
  },
  {
    id: 4,
    description: 'contacta con nosotros',
    title: 'Contacta | Cristaleria Bricovidrio',
    img:
      'https://res.cloudinary.com/mloidi/image/upload/v1549206412/Bricovidrio/c-ubicacion.png',
    alt: 'c-ubicacion'
  }
];

const products = [
  {
    id: 1,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-cristaleria.jpg',
    alt: 'p-cristaleria',
    title: 'Cristalería en general',
    text: [
      'Llevamos muchos años sirviendo a miles de hogares y empresas, aislando sus viviendas del frío y decorando sus interiores con una amplia gama de productos a medida y de fabricación propia. Mesas de cristal, mamparas de baño, vitrinas, escaparates con decoración de vinilos, correderas de cristal, cortinas de vidrio, espejos, etc. Hay una gran variedad de manufacturas que se le pueden realizar al cristal, como el canto pulido brillante, biselado, esquinas redondeadas, vidrios lacados de colores. Contamos con maquinaría de vanguardia que nos permiten acometer grandes proyectos y también contamos con una grúa para los paneles de gran tamaño.'
    ],
    link: {
      to: '/trabajos/cristaleria-general',
      description: 'Trabajos de cristalería en general'
    }
  },
  {
    id: 2,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-cortinas-cristal.jpg',
    alt: 'p-cristaleria',
    title: 'Cortinas de cristal. Cerramiento acristalado Sytemglass',
    text: [
      'De fácil instalación, con un mínimo impacto visual en el entorno arquitectónico. Máximo aprovechamiento de espacios infravalorados de la vivienda, como terrazas, porches, galerías, ventanales, etc. Muy prácticas y fáciles de limpiar tanto por dentro, como por fuera, ya que toda la estructura se recoge facilitando su limpieza. Sistema de seguridad con bloqueo infantil y cerradura antirrobo. Los perfiles inferiores pueden estar embutidos, lo que facilita el acceso a sillas de ruedas, carritos de bebés, etc'
    ],
    link: {
      to: '/trabajos/cortinas-cristal',
      description: 'Trabajos de cortinas de cristal'
    }
  },
  {
    id: 3,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-instalaciones-comerciales.jpg',
    alt: 'p-instalaciones-comerciales',
    title: 'Instalaciones comerciales. Cerramiento acristalado Sytemglass',
    text: [
      'Disponemos en nuestro taller de las últimas tecnologías, herramientas y medios necesarios para llevar a cabo instalaciones comerciales, tanto en oficinas, tiendas, bares, restaurantes, etc.',
      'Nos encargamos de la realización global, desde el proyecto inicial hasta la colocación de acristalamientos para obras, ventanas, puertas correderas, separaciones de ambiente, escaparates, espejos, encimeras para cocina y baños, mamparas fijas y correderas de ducha...',
      'Disponemos de una amplia variedad de productos avaladas por unos proveedores de garantía y calidad contrastada en el mercado nacional. comerciales, tanto en oficinas, tiendas, bares, restaurantes, etc.'
    ],
    link: {
      to: '/trabajos/instalaciones-comerciales',
      description: 'Trabajos de instalaciones comerciales'
    }
  },
  {
    id: 4,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-vidrios-decorados.jpg',
    alt: 'p-vidrios-decorados',
    title: 'Vidrio decorados',
    text: [
      'Distintas técnicas se emplean para este fin. El arenado, vidrios lacados, todo tipo de laminados impresos con telas, con las impresiones entre dos cristales y otros con fotos.'
    ],
    link: {
      to: '/trabajos/vidrio-decorado',
      description: 'Trabajos de vidrio decorado'
    }
  },
  {
    id: 5,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-vidrieras.jpg',
    alt: 'p-vidrieras',
    title: 'Vidrieras',
    text: [
      'Es la técnica mediante la cual se pintan cristales siguiendo un patrón y uniéndolos con tiras de plomo. Existen otras técnicas.'
    ],
    link: {
      to: '/trabajos/vidrieras',
      description: 'Trabajos de vidrieras'
    }
  },
  {
    id: 6,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-biselados.jpg',
    alt: 'p-biselados',
    title: 'Biselados',
    text: [
      'Este proceso permite dar un ángulo al canto del cristal, provocando una reflexión diferente a la cara plana. Ideal para cristales de un grosor a partir de 5mm.'
    ],
    link: {
      to: '/trabajos/biselados',
      description: 'Trabajos de biselados'
    }
  },
  {
    id: 7,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-espejos.jpg',
    alt: 'p-espejos',
    title: 'Espejos',
    text: [
      'Nuestra propuesta es amplia y abarca una gran gama de posibilidades, de formas, de tonos y espesores.'
    ],
    link: {
      to: '/trabajos/espejos',
      description: 'Trabajos de espejos'
    }
  },
  {
    id: 8,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-fusing.jpg',
    alt: 'p-fusing',
    title: 'Fusing',
    text: [
      'Se trata de una novedosa técnica que emplea hornos con altas temperaturas para fundir vidrios de color sobre unas planchas de vidrio especiales, consiguiendo así bellas soluciones decorativas. de',
      'Los colores conseguidos son inalterables. Se pueden emplear para decorar espejos de baño, puertas de paso y lavabos de cristal.'
    ],
    link: {
      to: '/trabajos/fusing',
      description: 'Trabajos de Fusing'
    }
  },
  {
    id: 9,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-mamparas.jpg',
    alt: 'p-mamparas',
    title: 'Mamparas de baño',
    text: [
      'Fijos, con correderas, distintos tipos de cristas, con o sin decorado.'
    ],
    link: {
      to: '/trabajos/mamparas-bano',
      description: 'Trabajos de mamparas de baño'
    }
  },
  {
    id: 10,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-lavabos.jpg',
    alt: 'p-lavabos',
    title: 'Encimeras de seno integrado',
    text: [''],
    link: {
      to: '/trabajos/encimeras-seno-integrado',
      description: 'Trabajos de encimeras de seno integrado'
    }
  },
  {
    id: 11,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-vinilos-decorativos.jpg',
    alt: 'p-vinilos-decorativos',
    title: 'Vinilos decorativos',
    text: [
      'Una nueva tendencia en decoración permite, de manera rápida y sencilla, decorar tu casa o tu negocio a tu gusto, convirtiéndolo en un espacio personalizado.',
      'Los vinilos decorativos son muy versátiles y contamos con las herramientas adecuadas para poder llevar a cabo diferentes proyectos y aplicaciones, como por ejemplo, cristal laminado con fotografía impresa, vinilos ácidos con imágenes vectoriales, ideales para tiendas, bares o grandes escaparates.',
      'Pueden pegarse sobre paredes, suelos, ventanas, puertas, muebles y en general, sobre cualquier superficie lisa, ya sea madera, chapa, plástico, etc.',
      'El límite está solamente en tu imaginación. Aquí encontrarás muchas ideas para ayudarte en la elección.'
    ],
    link: {
      to: '/trabajos/vinilos-decorativos',
      description: 'Trabajos de vinilos decorativos'
    }
  },
  {
    id: 12,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/p-pegados-por-uv.jpg',
    alt: 'p-pegados-por-uv',
    title: 'Pegados por rayos UV',
    text: ['Adesivo especial, es casi transparente y muy resistente.'],
    link: {
      to: '/trabajos/pegados-rayos-uv',
      description: 'Trabajos de pegados por rayos UV'
    }
  }
];

const about = [
  {
    id: 1,
    img:
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548362087/Bricovidrio/bricovidrio-cristaleria.jpg',
    alt: 'bricovidrio-cristaleria',
    title: 'Más de 20 años de experiencia dedicada al mundo del cristal',
    text: [
      'Bricovidrio somos una empresa con más de 20 años de experiencia dedicada al cristal, acompañando en su trayectoria, la evolución y tendencias tecnológicas, para ofrecerles la máxima calidad de nuestros productos y aportar las mejores soluciones a sus necesidades de acristalamiento del vidrio plano y decorativo.',
      'Con nuestro equipo humano y sofisticada maquinaria que nos permiten acometer grandes proyectos, conseguimos realizar todo tipo de manufacturas, con un alto nivel de calidad y eficiencia.',
      'En Bricovidrio prestamos servicio tanto a profesionales del sector como al cliente final, aislando sus viviendas del frío y decorando sus interiores con una amplia gama de productos a medida y de fabricación propia.'
    ],
    link: null
  }
];

const projects = [
  {
    description: 'Cristalería en general',
    slug: 'cristaleria-general',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589354/Bricovidrio/20110719105819-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589354/Bricovidrio/20110719105738-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589355/Bricovidrio/20130215225231-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589354/Bricovidrio/20120329144217-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589354/Bricovidrio/20110719105600-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589355/Bricovidrio/20121207232754-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589355/Bricovidrio/20120116144654-1.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548589355/Bricovidrio/20130215224627-1.jpg'
    ],
    link: {
      to: '/trabajos/cristaleria-general'
    }
  },
  {
    description: 'Cortinas de cristal',
    slug: 'cortinas-cristal',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590359/Bricovidrio/20120329142134-14.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590359/Bricovidrio/20120203133715-14.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590359/Bricovidrio/20120329142609-14.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590359/Bricovidrio/20120329143728-14.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590359/Bricovidrio/20110719103132-14.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590359/Bricovidrio/20120116144524-14.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590358/Bricovidrio/20110719103020-14.jpg'
    ],
    link: {
      to: '/trabajos/cortinas-cristal'
    }
  },
  {
    description: 'Instalaciones comerciales',
    slug: 'instalaciones-comerciales',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20121207234650-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20110719105430-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20110701120138-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20111213121752-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20110701120122-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20110701120129-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590584/Bricovidrio/20110701120115-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590583/Bricovidrio/20110701120040-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590583/Bricovidrio/20110701120012-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590583/Bricovidrio/20110701120108-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590583/Bricovidrio/20110701120033-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590583/Bricovidrio/20110701120047-2.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1548590583/Bricovidrio/20110701115957-2.jpg'
    ],
    link: {
      to: '/trabajos/instalaciones-comerciales'
    }
  },
  {
    description: 'Vidrios decorados',
    slug: 'vidrio-decorado',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208549/Bricovidrio/20120203141916-3.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208549/Bricovidrio/20120203140433-3.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208548/Bricovidrio/20120203134304-3.jpg'
    ],
    link: {
      to: '/trabajos/vidrio-decorado'
    }
  },
  {
    description: 'Vidrieras',
    slug: 'vidrieras',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208659/Bricovidrio/20110701120804-4.jpg'
    ],
    link: {
      to: '/trabajos/vidrieras'
    }
  },
  {
    description: 'Biselados',
    slug: 'biselados',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208736/Bricovidrio/20110712103255-5.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208735/Bricovidrio/20110712103245-5.jpg'
    ],
    link: {
      to: '/trabajos/biselados'
    }
  },
  {
    description: 'Espejos',
    slug: 'espejos',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208809/Bricovidrio/20110719105309-6.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208809/Bricovidrio/20110719105211-6.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208809/Bricovidrio/20110701120959-6.jpg'
    ],
    link: {
      to: '/trabajos/espejos'
    }
  },
  {
    description: 'Fusing',
    slug: 'fusing',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208880/Bricovidrio/20110718102122-7.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208880/Bricovidrio/20110718102115-7.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208879/Bricovidrio/20110718102104-7.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549208879/Bricovidrio/20110718102048-7.jpg'
    ],
    link: {
      to: '/trabajos/fusing'
    }
  },
  {
    description: 'Mamparas de baño',
    slug: 'mamparas-bano',
    projects: [],
    link: {
      to: '/trabajos/mamparas-bano'
    }
  },
  {
    description: 'Encimeras de seno integrado',
    slug: 'encimeras-seno-integrado',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209061/Bricovidrio/20110712101439-10.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209061/Bricovidrio/20110712101429-10.jpg'
    ],
    link: {
      to: '/trabajos/encimeras-seno-integrado'
    }
  },
  {
    description: 'Decoración en vinilo',
    slug: 'vinilos-decorativos',
    projects: [
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209182/Bricovidrio/20110712092345-11.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209181/Bricovidrio/20110719110002-11.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209181/Bricovidrio/20110719113905-11.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209181/Bricovidrio/20110712090838-11.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209181/Bricovidrio/20110719105953-11.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209181/Bricovidrio/20110718102757-11.jpg',
      'https://res.cloudinary.com/mloidi/image/upload/q_auto:best,c_scale,h_193,w_281/v1549209181/Bricovidrio/20110718102737-11.jpg'
    ],
    link: {
      to: '/trabajos/vinilos-decorativos'
    }
  },
  {
    description: 'Pegados por rayos UV',
    slug: 'pegados-rayos-uv',
    projects: [],
    link: {
      to: '/trabajos/pegados-rayos-uv'
    }
  }
];
export const DataService = {
  getMenuOptions: () => {
    return menuOptions;
  },
  getDataMenuTop: () => {
    return dataMenuTop;
  },
  getDataMenuBottom: () => {
    return dataMenuBottom;
  },
  getPageMainInfo: id => {
    const filterPageMainInfo = pageMainInfo.find((value, index, arrsy) => {
      return value.id === id;
    });
    return filterPageMainInfo;
  },
  getProducts: () => {
    return products;
  },

  getAbout: () => {
    return about;
  },
  getProjects: () => {
    return projects;
  },
  getProject: slug => {
    const filterProject = projects.find((value, index, arrsy) => {
      return value.slug === slug;
    });
    return filterProject;
  }
};
