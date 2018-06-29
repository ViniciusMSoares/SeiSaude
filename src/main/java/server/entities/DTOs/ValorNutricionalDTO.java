package server.entities.DTOs;

public class ValorNutricionalDTO {

	private String[] nomeVNutricional;
	
	private String[] valoresVNutricional;
	
	private String[] quantidadesVNutricional;
	
	private String[] unidadesVNutricional;
	
	public ValorNutricionalDTO() {
		
	}

	public String[] getNomeVNutricional() {
		return nomeVNutricional;
	}

	public void setNomeVNutricional(String[] nomeVNutricional) {
		this.nomeVNutricional = nomeVNutricional;
	}

	public String[] getValoresVNutricional() {
		return valoresVNutricional;
	}

	public void setValoresVNutricional(String[] valoresVNutricional) {
		this.valoresVNutricional = valoresVNutricional;
	}

	public String[] getUnidadesVNutricional() {
		return unidadesVNutricional;
	}

	public void setUnidadesVNutricional(String[] unidadesVNutricional) {
		this.unidadesVNutricional = unidadesVNutricional;
	}

	public String[] getQuantidadesVNutricional() {
		return quantidadesVNutricional;
	}

	public void setQuantidadesVNutricional(String[] quantidadesVNutricional) {
		this.quantidadesVNutricional = quantidadesVNutricional;
	}
	
}
