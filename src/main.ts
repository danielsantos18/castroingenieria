import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/** Tiempo mínimo (ms) que se muestra el preloader inicial. */
const MIN_PRELOADER_MS = 1500;

/** Oculta y elimina el preloader inicial declarado en index.html. */
function hideInitialPreloader(): void {
  const preloader = document.getElementById('app-preloader');
  if (!preloader) return;
  preloader.classList.add('is-hidden');
  preloader.addEventListener('transitionend', () => preloader.remove(), { once: true });
  // Respaldo por si el evento de transición no se dispara.
  setTimeout(() => preloader.remove(), 800);
}

/** Espera a que se cumpla el tiempo mínimo antes de ocultar el preloader. */
function hideInitialPreloaderAfterMinTime(): void {
  // performance.now() = ms transcurridos desde que empezó a cargar la página.
  const remaining = Math.max(0, MIN_PRELOADER_MS - performance.now());
  setTimeout(hideInitialPreloader, remaining);
}

bootstrapApplication(App, appConfig)
  .then(() => hideInitialPreloaderAfterMinTime())
  .catch((err) => console.error(err));
