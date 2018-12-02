import { OccupationEmp } from "./occupationEmp";

export class BasicEmployee {
  public Id: number;
  public Name: string;
  public LastName: string;
  public City: string;
  public Email: string;
  public Image: string;
  public Occupations: Array<OccupationEmp>;
}
