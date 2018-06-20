package server.entities.DTOs;

public class TratamentoDTO {

	private String descricao;

	private String tipo;

	public TratamentoDTO () {
		
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
}
