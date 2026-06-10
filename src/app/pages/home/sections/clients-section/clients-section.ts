import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CLIENTS } from '../../../../core/data/clients.data';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-clients-section',
  imports: [Reveal],
  templateUrl: './clients-section.html',
  styleUrl: './clients-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsSection {
  protected readonly clients = CLIENTS;

  /** Lista duplicada para lograr un desplazamiento continuo (loop sin saltos). */
  protected readonly marquee = [...CLIENTS, ...CLIENTS];

  /** Muestra el texto ampliado de colaboraciones (usado en la página Nosotros). */
  readonly detailed = input(false);
}
