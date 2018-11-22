import { LanguageJob } from "./language";
import { Skill } from "./skill";

export class JobOffer{
	public OfferId: number;
	public CompanyId: number;
	public Profession: string;
	public Description: string;
	public MinExperience: number;
	public ReqLanguages: Array<LanguageJob>;
	public ReqSkills: Array<Skill>;
	public City: string;
	//public HoraInicio: DateTime;
	//public HoraFin: DateTime;
	public Deadline: Date;
	
}
