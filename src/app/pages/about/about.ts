import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_INFO, STATS } from '../../core/data/site-info.data';
import { Reveal } from '../../shared/directives/reveal';
import { CountUp } from '../../shared/count-up/count-up';
import { TeamSection } from '../home/sections/team-section/team-section';
import { ClientsSection } from '../home/sections/clients-section/clients-section';

/** Página "Nosotros" con la información corporativa de la empresa. */
@Component({
  selector: 'app-about',
  imports: [RouterLink, Reveal, CountUp, TeamSection, ClientsSection],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly site = SITE_INFO;
  protected readonly stats = STATS;

  /** Valores corporativos mostrados en la cuadrícula de valores. */
  protected readonly values = [
    {
      icon: 'quality',
      title: 'Calidad',
      text: 'Ejecutamos cada proyecto con altos estándares técnicos y materiales confiables.',
    },
    {
      icon: 'safety',
      title: 'Seguridad',
      text: 'Cumplimos las normas de seguridad para proteger a nuestro personal y al cliente.',
    },
    {
      icon: 'clock',
      title: 'Cumplimiento',
      text: 'Respetamos los plazos y entregamos resultados de manera oportuna.',
    },
    {
      icon: 'heart',
      title: 'Compromiso',
      text: 'El cliente es nuestro mayor tesoro; nos esmeramos en satisfacer sus necesidades.',
    },
    {
      icon: 'check',
      title: 'Responsabilidad',
      text: 'Asumimos cada obra con seriedad, transparencia y atención al detalle.',
    },
    {
      icon: 'badge',
      title: 'Experiencia',
      text: 'Personal capacitado y equipos adecuados para resolver retos industriales.',
    },
  ] as const;
}
