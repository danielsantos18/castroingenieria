import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

/** Botón flotante que aparece al hacer scroll y vuelve al inicio de la página. */
@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTop {
  protected readonly visible = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.visible.set(window.scrollY > 400);
  }

  protected scrollToTop(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
