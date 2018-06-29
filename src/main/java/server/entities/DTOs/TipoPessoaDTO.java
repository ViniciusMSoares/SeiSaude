package server.entities.DTOs;

public class TipoPessoaDTO {

	private String alergias;

	private String outros;

	public TipoPessoaDTO() {
		super();
	}

	public String getAlergias() {
		return alergias;
	}

	public void setAlergias(String alergias) {
		this.alergias = alergias;
	}

	public String getOutros() {
		return outros;
	}

	public void setOutros(String outros) {
		this.outros = outros;
	}
	
}
