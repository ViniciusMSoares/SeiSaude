package server.entities.DTOs;

public class PacienteDTO {

	private String nome;
	
	private int idade;

	private float peso;

	private float altura;

	private String tipoSanguineo;
	
	private Long id_tipoPessoa;

	public PacienteDTO() {

	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}

	public String getTipoSanguineo() {
		return tipoSanguineo;
	}

	public void setTipoSanguineo(String tipoSanguineo) {
		this.tipoSanguineo = tipoSanguineo;
	}

	public Long getId_tipoPessoa() {
		return id_tipoPessoa;
	}

	public void setId_tipoPessoa(Long id_tipoPessoa) {
		this.id_tipoPessoa = id_tipoPessoa;
	}
	
}
