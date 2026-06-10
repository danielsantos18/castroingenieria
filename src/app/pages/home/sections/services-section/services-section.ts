import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURED_SERVICES } from '../../../../core/data/services.data';
import { ServiceCard } from '../../../../shared/service-card/service-card';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-services-section',
  imports: [ServiceCard, RouterLink, Reveal],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  protected readonly services = FEATURED_SERVICES;
}
