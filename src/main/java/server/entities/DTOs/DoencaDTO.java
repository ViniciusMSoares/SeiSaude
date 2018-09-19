package server.entities.DTOs;

public class DoencaDTO extends SituacaoDTO{
	
	private String[] nomesSintomas;

	public DoencaDTO() {
		super();
	}

	public String[] getNomesSintomas() {
		return nomesSintomas;
	}

	public void setNomesSintomas(String[] nomesSintomas) {
		this.nomesSintomas = nomesSintomas;
	}

}
