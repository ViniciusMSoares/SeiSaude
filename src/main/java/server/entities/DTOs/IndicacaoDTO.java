package server.entities.DTOs;

public class IndicacaoDTO {

	private float dosagem;

	private String efeito;

	private String unidade;

	private String tipo;
	
	private Long id_elemento;
	
	private Long id_situacao;
	
	private Long id_tipoPessoa;

	public IndicacaoDTO () {
		
	}
	
	public float getDosagem() {
		return dosagem;
	}

	public void setDosagem(float dosagem) {
		this.dosagem = dosagem;
	}

	public String getEfeito() {
		return efeito;
	}

	public void setEfeito(String efeito) {
		this.efeito = efeito;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Long getId_elemento() {
		return id_elemento;
	}

	public void setId_elemento(Long id_elemento) {
		this.id_elemento = id_elemento;
	}

	public Long getId_situacao() {
		return id_situacao;
	}

	public void setId_situacao(Long id_situacao) {
		this.id_situacao = id_situacao;
	}

	public Long getId_tipoPessoa() {
		return id_tipoPessoa;
	}

	public void setId_tipoPessoa(Long id_tipoPessoa) {
		this.id_tipoPessoa = id_tipoPessoa;
	}
	
}
