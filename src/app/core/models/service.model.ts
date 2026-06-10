/** Clave de icono usada cuando un servicio no tiene imagen propia. */
export type ServiceIconName =
  | 'terrain'
  | 'civil'
  | 'roof'
  | 'fence'
  | 'industrial'
  | 'paint'
  | 'carpentry'
  | 'fire'
  | 'assembly'
  | 'maintenance'
  | 'risk'
  | 'pipe'
  | 'tank'
  | 'insulation'
  | 'cleaning';

/** Un servicio que ofrece la empresa. */
export interface Service {
  /** Identificador único / slug para rutas. */
  readonly slug: string;
  /** Nombre del servicio. */
  readonly title: string;
  /** Descripción corta para tarjetas y listados. */
  readonly summary: string;
  /** Ruta de la imagen ilustrativa (si existe foto real). */
  readonly image?: string;
  /** Icono de línea usado cuando no hay imagen. */
  readonly icon?: ServiceIconName;
  /** Marca el servicio como destacado para el preview del home. */
  readonly featured?: boolean;
}
