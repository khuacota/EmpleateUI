import { Experience } from "./experience";
import { Language } from "./language";
import { Title } from "./title";
import { OcupacionEmp } from "./ocupacionEmp";
import { SkillEmp } from "./skillEmp";

export class Academic {
  public EmpleadoId: number;
  public Experiencias: Array<Experience>;
  public Idiomas: Array<Language>;
  public Titulos: Array<Title>;
  public Ocupaciones: Array<OcupacionEmp>;
  public Habilidades: Array<SkillEmp>;
}
