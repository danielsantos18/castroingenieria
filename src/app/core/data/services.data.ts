import { Service } from '../models/service.model';

/**
 * Catálogo completo de servicios de Castros Ingeniería SAS (contenido real).
 * Los que tienen `featured: true` se muestran como preview en el home; el
 * listado completo vive en la página /servicios. Los servicios sin `image`
 * usan un icono de línea (`icon`).
 */
export const SERVICES: readonly Service[] = [
  {
    slug: 'conformacion-de-terrenos',
    title: 'Conformación de terrenos',
    summary:
      'Adecuación, nivelación y preparación de terrenos para el desarrollo de obras civiles e industriales.',
    image: 'images/services/conformacion-terrenos.png',
    icon: 'terrain',
    featured: true,
  },
  {
    slug: 'obras-civiles-metalmecanicas',
    title: 'Construcción de obras civiles y metalmecánicas',
    summary:
      'Construcción de obras civiles y trabajos metalmecánicos con altos estándares de calidad y cumplimiento.',
    image: 'images/services/obras-civiles.png',
    icon: 'civil',
    featured: true,
  },
  {
    slug: 'mantenimiento-de-cubiertas',
    title: 'Mantenimiento a cubiertas',
    summary:
      'Inspección, reparación e impermeabilización de cubiertas industriales para garantizar su durabilidad y seguridad.',
    image: 'images/services/mantenimiento-cubiertas.png',
    icon: 'roof',
    featured: true,
  },
  {
    slug: 'cerramientos',
    title: 'Cerramientos',
    summary:
      'Diseño e instalación de cerramientos perimetrales para delimitar y proteger áreas industriales.',
    icon: 'fence',
  },
  {
    slug: 'diseno-construccion-areas-industriales',
    title: 'Diseño y construcción de áreas industriales',
    summary:
      'Diseño, planeación y ejecución de áreas industriales a la medida de las necesidades de cada cliente.',
    image: 'images/services/construccion-industrial.png',
    icon: 'industrial',
    featured: true,
  },
  {
    slug: 'mantenimiento-pintura-instalaciones-industriales',
    title: 'Mantenimiento y pintura de instalaciones industriales',
    summary:
      'Mantenimiento preventivo y correctivo, además de pintura industrial para conservar y proteger tus instalaciones.',
    image: 'images/services/mantenimiento-pintura.png',
    icon: 'paint',
    featured: true,
  },
  {
    slug: 'carpinteria-industrial',
    title: 'Carpintería industrial',
    summary:
      'Construcción de piezas en madera para la industria, fabricadas a medida con acabados resistentes.',
    icon: 'carpentry',
  },
  {
    slug: 'montaje-sistemas-contraincendios',
    title: 'Montaje de sistemas contra incendios',
    summary:
      'Instalación y montaje de sistemas contra incendios que cumplen con la normativa vigente de seguridad.',
    image: 'images/services/contraincendios.png',
    icon: 'fire',
    featured: true,
  },
  {
    slug: 'montaje-equipos-procesos-industriales',
    title: 'Montaje de equipos en procesos industriales',
    summary:
      'Montaje e instalación de equipos para procesos industriales, asegurando un funcionamiento confiable.',
    icon: 'assembly',
  },
  {
    slug: 'mantenimiento-reparacion-equipos-industriales',
    title: 'Mantenimiento y reparación de equipos industriales',
    summary:
      'Servicios de mantenimiento y reparación que prolongan la vida útil de tus equipos industriales.',
    icon: 'maintenance',
  },
  {
    slug: 'obra-civil-espacios-alto-riesgo',
    title: 'Mantenimiento de obra civil en espacios de alto riesgo',
    summary:
      'Trabajos de obra civil en entornos de alto riesgo, ejecutados con estrictos protocolos de seguridad.',
    icon: 'risk',
  },
  {
    slug: 'acometidas-tuberias-enterradas',
    title: 'Acometidas de tuberías enterradas',
    summary:
      'Instalación de acometidas y redes de tuberías enterradas para suministro y conducción de fluidos.',
    icon: 'pipe',
  },
  {
    slug: 'pintura-tanques-almacenamiento',
    title: 'Pintura de tanques de almacenamiento',
    summary:
      'Preparación y pintura de tanques de almacenamiento para protegerlos contra la corrosión.',
    icon: 'tank',
  },
  {
    slug: 'aislamiento-equipos-tuberias',
    title: 'Aislamiento de equipos y tuberías',
    summary:
      'Aislamiento térmico de equipos y tuberías para mejorar la eficiencia y la seguridad operativa.',
    icon: 'insulation',
  },
  {
    slug: 'limpieza-espacios-confinados',
    title: 'Limpieza en espacios confinados',
    summary:
      'Limpieza especializada en espacios confinados con personal certificado y equipos adecuados.',
    icon: 'cleaning',
  },
];

/** Subconjunto destacado que se muestra como preview en el home. */
export const FEATURED_SERVICES: readonly Service[] = SERVICES.filter((s) => s.featured);
