package server.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
public class Indicacao implements Serializable{

	@Transient
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	@Column(name = "id_indicacao")
	private Long id;

	@Column()
	private float dosagem;
	
	@NotEmpty()
	@Column()
	private String efeito;
	
	@NotEmpty()
	@Column()
	private String unidade;
	
	@NotEmpty()
	@Column()
	private String tipo;

	public Indicacao(float dosagem, String efeito, String unidade, String tipo) {
		super();
		this.dosagem = dosagem;
		this.efeito = efeito;
		this.unidade = unidade;
		this.tipo = tipo;
	}

	public Indicacao() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
}
