import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_INFO } from '../../../../core/data/site-info.data';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-contact-cta',
  imports: [RouterLink, Reveal],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCta {
  protected readonly site = SITE_INFO;
}
