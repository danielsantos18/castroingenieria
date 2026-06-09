import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TEAM } from '../../../../core/data/team.data';
import { TeamMember } from '../../../../core/models/team-member.model';
import { TeamCard } from '../../../../shared/team-card/team-card';
import { TeamModal } from '../../../../shared/team-modal/team-modal';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-team-section',
  imports: [TeamCard, TeamModal, Reveal],
  templateUrl: './team-section.html',
  styleUrl: './team-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSection {
  protected readonly team = TEAM;

  /** Integrante seleccionado para mostrar en el modal (null = cerrado). */
  protected readonly selected = signal<TeamMember | null>(null);

  protected openMember(member: TeamMember): void {
    this.selected.set(member);
  }

  protected closeModal(): void {
    this.selected.set(null);
  }
}
