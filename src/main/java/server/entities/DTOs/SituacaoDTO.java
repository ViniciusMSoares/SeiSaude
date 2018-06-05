package server.entities.DTOs;

public class SituacaoDTO {
	
	private String name;
	
	private String descricao;
	
	private int tipo;

	public SituacaoDTO() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

}
