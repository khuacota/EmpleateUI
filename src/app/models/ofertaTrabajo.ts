import { Language } from "./language";
import { Skill } from "./skill";

export class OfertaTrabajo{
	public OfertaId: number;
	public EmpresaId: number;
	public Profesion: string;
	public Descripcion: string;
	public ExperienciaMin: number;
	public IdiomasReq: Array<Language>;
	public HabilidadesReq: Array<Skill>;
	public Ciudad: string;
	//public HoraInicio: DateTime;
	//public HoraFin: DateTime;
	public FechaLimite: Date;
	
}