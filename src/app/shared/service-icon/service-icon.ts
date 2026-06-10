import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceIconName } from '../../core/models/service.model';

/**
 * Iconos de línea para los servicios que no tienen fotografía.
 * Todos comparten un viewBox 0 0 24 24 y heredan el color con `currentColor`.
 */
@Component({
  selector: 'app-service-icon',
  templateUrl: './service-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'service-icon' },
  styles: `
    :host {
      display: block;
      line-height: 0;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class ServiceIcon {
  readonly name = input.required<ServiceIconName>();
}
