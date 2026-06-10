import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../core/data/services.data';
import { ServiceCard } from '../../shared/service-card/service-card';
import { Reveal } from '../../shared/directives/reveal';

/** Página con el catálogo completo de servicios. */
@Component({
  selector: 'app-services',
  imports: [ServiceCard, RouterLink, Reveal],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly services = SERVICES;
}
