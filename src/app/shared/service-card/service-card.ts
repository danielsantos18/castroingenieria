import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../core/models/service.model';
import { ServiceIcon } from '../service-icon/service-icon';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink, ServiceIcon],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCard {
  readonly service = input.required<Service>();

  /** Muestra el enlace "Conoce más" (se oculta dentro de la propia página de servicios). */
  readonly showLink = input(true);
}
