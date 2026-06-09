/** Una estadística destacada (años de experiencia, clientes felices, ...). */
export interface Stat {
  /** Valor numérico final (se anima de 0 a este número). */
  readonly value: number;
  /** Texto antes del número (p. ej. "+"). */
  readonly prefix?: string;
  /** Texto después del número (p. ej. "%"). */
  readonly suffix?: string;
  readonly label: string;
}

/** Tipos de canal/red social soportados (define el icono a mostrar). */
export type SocialIcon = 'whatsapp' | 'facebook' | 'instagram' | 'email' | 'phone';

/** Un canal de contacto o red social. */
export interface SocialLink {
  readonly label: string;
  readonly url: string;
  readonly icon: SocialIcon;
}

/** Datos de contacto y de marca de la empresa. */
export interface SiteInfo {
  readonly companyName: string;
  readonly tagline: string;
  /** Frase de propósito / misión corta. */
  readonly mission: string;
  /** Descripción "¿Quiénes somos?". */
  readonly about: string;
  /** Visión a futuro de la empresa. */
  readonly vision: string;
  /** Persona de contacto / representante. */
  readonly contactName: string;
  readonly contactRole: string;
  readonly phone: string;
  /** Número en formato internacional sin signos, para enlaces tel:/wa.me. */
  readonly phoneRaw: string;
  readonly email: string;
  /** Correo secundario (dirección de proyectos). */
  readonly emailAlt: string;
  readonly address: string;
  readonly whatsapp: string;
}
