import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from '../../core/data/navigation.data';
import { SITE_INFO } from '../../core/data/site-info.data';
import { ThemeService } from '../../core/services/theme';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly navLinks = NAV_LINKS;
  protected readonly site = SITE_INFO;
  protected readonly themeService = inject(ThemeService);

  /** Indica si el menú móvil está abierto. */
  protected readonly menuOpen = signal(false);
  /** Indica si la página se ha desplazado (para compactar el header). */
  protected readonly scrolled = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
