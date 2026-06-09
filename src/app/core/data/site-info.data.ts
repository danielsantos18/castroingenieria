import { SiteInfo, SocialLink, Stat } from '../models/site-info.model';

/** Información corporativa y de contacto (Cartagena, Colombia). */
export const SITE_INFO: SiteInfo = {
  companyName: 'Castros Ingeniería SAS',
  tagline: 'Materializa tus Ideas',
  mission:
    'Buscamos facilitar el proceso de construcción y mantenimiento de las instalaciones de nuestros clientes.',
  about:
    'Castros Ingeniería es una empresa contratista creada para brindar soluciones efectivas a sus clientes en las áreas de construcción, pintura industrial, mantenimientos industriales y trabajos de limpieza en espacios confinados, entre otros oficios.',
  vision:
    'En el año 2030 Castros Ingeniería será una empresa reconocida por su excelente servicio y su contribución al desarrollo de la zona norte de Colombia.',
  contactName: 'Leonel Castro Olivo',
  contactRole: 'Director de Proyectos',
  phone: '+57 316 573 9047',
  phoneRaw: '573165739047',
  email: 'admin@castroingenieria.com',
  emailAlt: 'lco@castroingenieria.com',
  address: 'Calle 12 # 6 - 26, Pasacaballos, Cartagena, Colombia',
  whatsapp: '573165739047',
};

/**
 * Canales de contacto y redes sociales.
 * WhatsApp, llamada y correo son reales y funcionales.
 * TODO: reemplazar las URLs de Facebook e Instagram con los perfiles reales
 * de la empresa (en el sitio actual son enlaces vacíos "#").
 */
export const SOCIALS: readonly SocialLink[] = [
  { label: 'WhatsApp', url: 'https://wa.me/573165739047', icon: 'whatsapp' },
  { label: 'Facebook', url: '#', icon: 'facebook' },
  { label: 'Instagram', url: '#', icon: 'instagram' },
  { label: 'Correo', url: 'mailto:admin@castroingenieria.com', icon: 'email' },
];

/** Estadísticas destacadas mostradas en la sección "Nosotros". */
export const STATS: readonly Stat[] = [
  { value: 10, prefix: '+', label: 'Clientes industriales' },
  { value: 100, suffix: '%', label: 'Compromiso con la calidad' },
  { value: 100, suffix: '%', label: 'Cumplimiento en seguridad' },
];
