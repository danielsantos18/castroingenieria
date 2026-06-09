import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Anima un número de 0 hasta `value` cuando entra en el viewport (una sola vez).
 * Admite `prefix`/`suffix` (p. ej. "+" o "%"). Respeta prefers-reduced-motion.
 */
@Component({
  selector: 'app-count-up',
  template: '{{ prefix() }}{{ current() }}{{ suffix() }}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountUp implements OnInit, OnDestroy {
  readonly value = input.required<number>();
  readonly prefix = input('');
  readonly suffix = input('');
  /** Duración de la animación en milisegundos. */
  readonly duration = input(1800);

  protected readonly current = signal(0);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private rafId?: number;

  ngOnInit(): void {
    const reduceMotion =
      isPlatformBrowser(this.platformId) &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      !isPlatformBrowser(this.platformId) ||
      typeof IntersectionObserver === 'undefined' ||
      reduceMotion
    ) {
      this.current.set(this.value());
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.observer?.disconnect();
            this.animate();
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(this.host.nativeElement);
  }

  private animate(): void {
    const target = this.value();
    const duration = this.duration();
    const start = performance.now();

    const tick = (now: number): void => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      this.current.set(Math.round(eased * target));
      if (progress < 1) {
        this.rafId = requestAnimationFrame(tick);
      }
    };
    this.rafId = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
