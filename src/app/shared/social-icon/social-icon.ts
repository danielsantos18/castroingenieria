import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SocialIcon } from '../../core/models/site-info.model';

/**
 * Renderiza el SVG de un canal/red social según su clave. El tamaño se controla
 * con `font-size` desde el contenedor (el SVG mide 1em) y el color con `color`.
 */
@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialIconView {
  readonly icon = input.required<SocialIcon>();
}
