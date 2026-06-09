import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_INFO, SOCIALS } from '../../../../core/data/site-info.data';
import { Reveal } from '../../../../shared/directives/reveal';
import { SocialIconView } from '../../../../shared/social-icon/social-icon';

@Component({
  selector: 'app-contact-section',
  imports: [Reveal, SocialIconView],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly site = SITE_INFO;
  protected readonly socials = SOCIALS;
}
