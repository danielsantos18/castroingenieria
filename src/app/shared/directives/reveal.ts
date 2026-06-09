import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Revela el elemento con una animación (fade + desplazamiento) cuando entra en
 * el viewport, usando IntersectionObserver. La animación ocurre una sola vez.
 *
 * Uso:
 *   <div appReveal>...</div>
 *   <app-card appReveal [revealDelay]="index * 100">  <!-- escalonado -->
 *
 * Los estilos viven en `styles/components/_reveal.scss` (clases `.reveal` /
 * `.reveal--in`) porque la directiva se aplica en componentes con encapsulación.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.reveal--in]': 'visible()',
    '[style.--reveal-delay]': 'delay() + "ms"',
  },
})
export class Reveal implements OnInit, OnDestroy {
  /** Retardo en milisegundos, útil para escalonar listas. */
  readonly delay = input(0, { alias: 'revealDelay' });

  protected readonly visible = signal(false);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    // Sin navegador o sin soporte: mostrar de inmediato (accesible y SSR-safe).
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      this.visible.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.visible.set(true);
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
