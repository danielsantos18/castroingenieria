/** Integrante del equipo de trabajo. */
export interface TeamMember {
  readonly name: string;
  /** Cargo o rol dentro de la empresa. */
  readonly role: string;
  /** Ruta de la fotografía (opcional mientras no haya foto real). */
  readonly photo?: string;
  /** Reseña profesional mostrada en el modal de detalle. */
  readonly bio?: string;
  /** Áreas de especialidad o competencias destacadas. */
  readonly specialties?: readonly string[];
  /** Años de experiencia (texto libre, p. ej. "+15 años"). */
  readonly experience?: string;
  /** Correo de contacto profesional. */
  readonly email?: string;
  /** Teléfono de contacto. */
  readonly phone?: string;
  /** Perfil de LinkedIn (URL completa). */
  readonly linkedin?: string;
}
