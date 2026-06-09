import { Project } from '../models/project.model';

/**
 * Casos de éxito mostrados en la galería de proyectos. Títulos tomados de la
 * experiencia real del portafolio; reutilizan las imágenes de obra disponibles.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'mantenimiento-cubiertas-cerramientos',
    title: 'Mantenimiento de cubiertas y cerramientos',
    category: 'Cubiertas',
    image: 'images/services/mantenimiento-cubiertas.png',
  },
  {
    slug: 'diseno-construccion-area-industrial',
    title: 'Diseño y construcción de área industrial',
    category: 'Áreas industriales',
    image: 'images/services/construccion-industrial.png',
  },
  {
    slug: 'conformacion-de-terrenos',
    title: 'Conformación de terrenos',
    category: 'Obra civil',
    image: 'images/services/conformacion-terrenos.png',
  },
  {
    slug: 'obras-civiles-metalmecanicas',
    title: 'Obras civiles y metalmecánicas',
    category: 'Metalmecánica',
    image: 'images/services/obras-civiles.png',
  },
  {
    slug: 'pintura-tanques-almacenamiento',
    title: 'Pintura de tanques de almacenamiento',
    category: 'Pintura industrial',
    image: 'images/services/mantenimiento-pintura.png',
  },
  {
    slug: 'montaje-sistemas-contraincendios',
    title: 'Montaje de sistema contraincendios',
    category: 'Sistemas contraincendios',
    image: 'images/services/contraincendios.png',
  },
];
