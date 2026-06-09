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
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Nosotros — ${BRAND}`,
    data: { heading: 'Nosotros' },
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Servicios — ${BRAND}`,
    data: { heading: 'Servicios' },
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
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Contáctanos — ${BRAND}`,
    data: { heading: 'Contáctanos' },
  },
  {
    path: '**',
    loadComponent: () => import('./pages/placeholder/placeholder').then((m) => m.Placeholder),
    title: `Página no encontrada — ${BRAND}`,
    data: { heading: 'Página no encontrada' },
  },
];
