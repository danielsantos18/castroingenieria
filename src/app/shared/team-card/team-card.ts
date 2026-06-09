import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { TeamMember } from '../../core/models/team-member.model';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCard {
  readonly member = input.required<TeamMember>();

  /** Se emite cuando el usuario selecciona la tarjeta para ver el detalle. */
  readonly select = output<TeamMember>();

  /** Iniciales para el avatar cuando no hay fotografía. */
  protected readonly initials = computed(() =>
    this.member()
      .name.split(' ')
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase(),
  );

  protected open(): void {
    this.select.emit(this.member());
  }
}
