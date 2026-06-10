import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

const BRAND = 'Castros Ingeniería SAS';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: `${BRAND} — Materializa tus Ideas`,
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: `Nosotros — ${BRAND}`,
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    title: `Servicios — ${BRAND}`,
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Proyectos — ${BRAND}`,
    data: { heading: 'Proyectos' },
  },
  {
    path: 'equipo',
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Nuestro Equipo — ${BRAND}`,
    data: { heading: 'Nuestro Equipo' },
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: `Contáctanos — ${BRAND}`,
  },
  {
    path: '**',
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Página no encontrada — ${BRAND}`,
    data: { heading: 'Página no encontrada' },
  },
];
