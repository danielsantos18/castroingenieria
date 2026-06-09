import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../../core/data/projects.data';
import { ProjectCard } from '../../../../shared/project-card/project-card';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, RouterLink, Reveal],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  protected readonly projects = PROJECTS;
}
