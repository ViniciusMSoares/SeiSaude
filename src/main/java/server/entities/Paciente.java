package server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class Paciente {

	@Transient
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_paciente")
	private Long id;

	@NotEmpty()
	@Column()
	private String nome;
	
	@NotEmpty()
	@Column()
	private int idade;
	
	@NotEmpty()
	@Column()
	private float peso;

	@NotEmpty()
	@Column()
	private float altura;
	
	@NotEmpty()
	@Column()
	private String tipoSanguineo;
	
	private Long id_tipoPessoa;
	
	public Paciente(String nome, int idade, float peso, float altura, String tipoSanguineo, Long id_tipoPessoa) {
		super();
		this.nome = nome;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		this.tipoSanguineo = tipoSanguineo;
		this.id_tipoPessoa = id_tipoPessoa;
	}

	public Paciente() {
		
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
