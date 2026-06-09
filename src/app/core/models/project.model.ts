/** Proyecto / caso de éxito realizado por la empresa. */
export interface Project {
  readonly slug: string;
  readonly title: string;
  /** Categoría o tipo de obra. */
  readonly category: string;
  readonly image: string;
}
