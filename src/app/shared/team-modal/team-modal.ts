import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { TeamMember } from '../../core/models/team-member.model';

/**
 * Modal de detalle de un integrante del equipo.
 *
 * El componente padre lo monta condicionalmente (`@if`) pasando el `member`
 * seleccionado y escucha la salida `close`. El propio modal gestiona la
 * animación de salida antes de emitir `close`, el bloqueo del scroll del body,
 * el foco y el cierre con Escape / clic en el fondo (accesible, role="dialog").
 */
@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.html',
  styleUrl: './team-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamModal implements OnInit, OnDestroy {
  readonly member = input.required<TeamMember>();

  /** Se emite una vez completada la animación de cierre. */
  readonly close = output<void>();

  /** Activa la animación de salida antes de desmontar el modal. */
  protected readonly leaving = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private previouslyFocused: HTMLElement | null = null;
  private closeTimer?: ReturnType<typeof setTimeout>;

  /** Iniciales para el avatar cuando no hay fotografía. */
  protected readonly initials = computed(() =>
    this.member()
      .name.split(' ')
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase(),
  );

  constructor() {
    // Al primer render: recordar el foco previo y mover el foco al diálogo.
    afterNextRender(() => {
      this.previouslyFocused = this.document.activeElement as HTMLElement | null;
      this.host.nativeElement.querySelector<HTMLElement>('.team-modal__close')?.focus();
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = '';
      this.previouslyFocused?.focus();
    }
  }

  @HostListener('document:keydown.escape')
  protected requestClose(): void {
    if (this.leaving()) {
      return;
    }
    this.leaving.set(true);
    this.closeTimer = setTimeout(() => this.close.emit(), 200);
  }

  /** Cierra solo si el clic ocurrió sobre el fondo, no sobre el panel. */
  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.requestClose();
    }
  }

  /** Trampa de foco básica: mantiene el Tab dentro del diálogo. */
  @HostListener('keydown', ['$event'])
  protected trapFocus(event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return;
    }
    const focusables = this.host.nativeElement.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) {
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = this.document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
