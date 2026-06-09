import { Service } from '../models/service.model';

/** Los 6 servicios principales de Castro Ingeniería (contenido del sitio real). */
export const SERVICES: readonly Service[] = [
  {
    slug: 'mantenimiento-de-cubiertas',
    title: 'Mantenimiento de cubiertas',
    summary:
      'Inspección, reparación e impermeabilización de cubiertas industriales para garantizar su durabilidad y seguridad.',
    image: 'images/services/mantenimiento-cubiertas.png',
  },
  {
    slug: 'diseno-construccion-areas-industriales',
    title: 'Diseño y Construcción de Áreas Industriales',
    summary:
      'Diseño, planeación y ejecución de áreas industriales a la medida de las necesidades de cada cliente.',
    image: 'images/services/construccion-industrial.png',
  },
  {
    slug: 'conformacion-de-terrenos',
    title: 'Conformación de terrenos',
    summary:
      'Adecuación, nivelación y preparación de terrenos para el desarrollo de obras civiles e industriales.',
    image: 'images/services/conformacion-terrenos.png',
  },
  {
    slug: 'obras-civiles-metalmecanicas',
    title: 'Obras civiles y metalmecánicas',
    summary:
      'Construcción de obras civiles y trabajos metalmecánicos con altos estándares de calidad y cumplimiento.',
    image: 'images/services/obras-civiles.png',
  },
  {
    slug: 'mantenimiento-pintura-areas-industriales',
    title: 'Mantenimiento y Pintura de Áreas Industriales',
    summary:
      'Mantenimiento preventivo y correctivo, además de pintura industrial para conservar y proteger tus instalaciones.',
    image: 'images/services/mantenimiento-pintura.png',
  },
  {
    slug: 'montaje-sistemas-contraincendios',
    title: 'Montaje de Sistemas Contraincendios',
    summary:
      'Instalación y montaje de sistemas contraincendios que cumplen con la normativa vigente de seguridad.',
    image: 'images/services/contraincendios.png',
  },
];
