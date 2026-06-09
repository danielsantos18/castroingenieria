/** Un servicio que ofrece la empresa. */
export interface Service {
  /** Identificador único / slug para rutas. */
  readonly slug: string;
  /** Nombre del servicio. */
  readonly title: string;
  /** Descripción corta para tarjetas y listados. */
  readonly summary: string;
  /** Ruta de la imagen ilustrativa. */
  readonly image: string;
}
