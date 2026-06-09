import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../core/data/navigation.data';
import { SERVICES } from '../../core/data/services.data';
import { SITE_INFO, SOCIALS } from '../../core/data/site-info.data';
import { SocialIconView } from '../../shared/social-icon/social-icon';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialIconView],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly site = SITE_INFO;
  protected readonly socials = SOCIALS;

  /** Enlaces rápidos: excluye Inicio y la sección de Proyectos (oculta). */
  protected readonly quickLinks = NAV_LINKS.filter(
    (link) => link.path !== '/' && link.path !== '/proyectos',
  );

  /** Miniaturas de la galería (reutiliza las imágenes de servicios). */
  protected readonly gallery = SERVICES.slice(0, 6);

  protected readonly currentYear = new Date().getFullYear();
}
