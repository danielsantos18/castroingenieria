import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Reveal } from '../../shared/directives/reveal';

/**
 * Página temporal "en construcción" para las rutas que aún no se han migrado.
 * El título se lee del `data.heading` definido en las rutas.
 */
@Component({
  selector: 'app-placeholder',
  imports: [RouterLink, Reveal],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Placeholder {
  private readonly route = inject(ActivatedRoute);
  protected readonly heading = (this.route.snapshot.data['heading'] as string) ?? 'Página';
}
