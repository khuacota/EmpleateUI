import { Experience } from "./experience";
import { Language } from "./language";
import { Title } from "./title";

export class Academic {
  public EmpleadoId: number;
  public Experiencias: Array<Experience>;
  public Idiomas: Array<Language>;
  public Titulos: Array<Title>;
}
