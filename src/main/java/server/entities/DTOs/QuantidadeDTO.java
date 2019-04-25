package server.entities.DTOs;

public class QuantidadeDTO {

	private String nome;
	
	private String valor;
	
	private String unidade;
	
	public QuantidadeDTO() {
		
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nomeComponente) {
		this.nome = nomeComponente;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valoresComponente) {
		this.valor = valoresComponente;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidadesComponente) {
		this.unidade = unidadesComponente;
	}
	
}
