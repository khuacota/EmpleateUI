 import { Experience } from "./experience";
import { Language } from "./language";
import { Degree } from "./Degree";
import { OccupationEmp } from "./occupationEmp";
import { SkillEmp } from "./skillEmp";

export class Academic {
  public EmployeeId: number;
  public Experiences: Array<Experience> = [];
  public Languages: Array<Language> = [];
  public Degrees: Array<Degree> = [];
  public Occupations: Array<OccupationEmp> = [];
  public Skills: Array<SkillEmp> = [];
}
