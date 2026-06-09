import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { ServicesSection } from './sections/services-section/services-section';
import { AboutSection } from './sections/about-section/about-section';
import { ClientsSection } from './sections/clients-section/clients-section';
import { TeamSection } from './sections/team-section/team-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { ContactCta } from './sections/contact-cta/contact-cta';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    ServicesSection,
    AboutSection,
    ClientsSection,
    TeamSection,
    ContactSection,
    ContactCta,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
