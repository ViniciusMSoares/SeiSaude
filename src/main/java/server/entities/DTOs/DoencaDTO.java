package server.entities.DTOs;

public class DoencaDTO extends SituacaoDTO{
	
	private String[] nomesSintomas;
	
	private String[] descSintomas;

	public DoencaDTO() {
		super();
	}
	
	public String[] getNomesSintomas() {
		return nomesSintomas;
	}

	public void setNomesSintomas(String[] nomesSintomas) {
		this.nomesSintomas = nomesSintomas;
	}

	public String[] getDescSintomas() {
		return descSintomas;
	}

	public void setDescSintomas(String[] descSintomas) {
		this.descSintomas = descSintomas;
	}

}
