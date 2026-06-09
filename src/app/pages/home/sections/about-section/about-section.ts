import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_INFO, STATS } from '../../../../core/data/site-info.data';
import { Reveal } from '../../../../shared/directives/reveal';
import { CountUp } from '../../../../shared/count-up/count-up';

@Component({
  selector: 'app-about-section',
  imports: [RouterLink, Reveal, CountUp],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly site = SITE_INFO;
  protected readonly stats = STATS;
}
