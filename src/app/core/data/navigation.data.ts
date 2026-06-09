/** Un enlace del menú de navegación principal. */
export interface NavLink {
  readonly label: string;
  readonly path: string;
}

/** Menú principal del sitio. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Nuestro Equipo', path: '/equipo' },
  { label: 'Contáctanos', path: '/contacto' },
];
