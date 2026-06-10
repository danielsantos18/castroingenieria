import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SITE_INFO, SOCIALS } from '../../core/data/site-info.data';
import { SERVICES } from '../../core/data/services.data';
import { Reveal } from '../../shared/directives/reveal';
import { SocialIconView } from '../../shared/social-icon/social-icon';

/** Página de contacto: información, redes, formulario y mapa. */
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, Reveal, SocialIconView],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly site = SITE_INFO;
  protected readonly socials = SOCIALS;
  protected readonly services = SERVICES;

  private readonly fb = inject(FormBuilder);

  /** Indica si ya se intentó enviar (para mostrar errores de validación). */
  protected readonly submitted = signal(false);
  /** Indica que el mensaje se envió correctamente (estado de éxito). */
  protected readonly sent = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+0-9()\s-]{7,}$/)]],
    service: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  /** ¿El control es inválido y debe mostrar error? */
  protected invalid(control: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }

  protected onSubmit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, phone, service, message } = this.form.getRawValue();
    const lines = [
      '¡Hola Castros Ingeniería! Quiero más información.',
      '',
      `*Nombre:* ${name}`,
      `*Correo:* ${email}`,
      `*Teléfono:* ${phone}`,
      service ? `*Servicio de interés:* ${service}` : '',
      '',
      `*Mensaje:* ${message}`,
    ].filter(Boolean);

    const url = `https://wa.me/${this.site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');

    this.sent.set(true);
  }

  /** Restablece el formulario para enviar un nuevo mensaje. */
  protected reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.sent.set(false);
  }
}
