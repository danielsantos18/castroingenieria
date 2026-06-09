import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_INFO } from '../../../../core/data/site-info.data';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly site = SITE_INFO;
}
