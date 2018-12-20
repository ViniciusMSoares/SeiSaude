package server.entities.DTOs;

public class ValorNutricionalDTO {

	private String nome;
	
	private String valorDiario;
	
	private String quantidade;
	
	private String unidade;
	
	public ValorNutricionalDTO() {
		
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getValorDiario() {
		return valorDiario;
	}

	public void setValorDiario(String valorDiario) {
		this.valorDiario = valorDiario;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}

	public String getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}
	
}
